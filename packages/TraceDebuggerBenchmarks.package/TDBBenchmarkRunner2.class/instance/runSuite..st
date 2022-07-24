running
runSuite: suite
	"Run asynchronously because of the way the benchmark runner handles errors currently. See BenchmarkRunner>>#runBenchmark:inSuite:."

	| process error |
	process := [[runner runSuite: suite] on: Error do: [Processor activeProcess suspend]] fork.
	
	"Catch errors."
	[1 second wait.
	process isTerminated ifTrue: [^ self].
	process isSuspended ifTrue:
		[error := self logErrorIn: process suspendedContext.
		self error: 'Benchmarks failed! \\Original error: ' withCRs , error.
		self flag: #workaround "logErrorIn: does not work in smalltalkCI"]]
			repeat.