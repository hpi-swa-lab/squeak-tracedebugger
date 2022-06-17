running
runSuite: suite
	"Run asynchronously because of the way the benchmark runner handles errors currently. See BenchmarkRunner>>#runBenchmark:inSuite:."

	| process |
	process := [runner runSuite: suite] fork.
	
	"Catch errors."
	[1 second wait.
	process isTerminated ifTrue: [^ self].
	process isSuspended ifTrue:
		[self logErrorIn: process suspendedContext.
		self error: 'Benchmarks failed']]
			repeat.