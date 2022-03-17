benchmarks
benchStepInto
	"Benchmark stepping through the entire tree via #stepInto."

	self prepare:
		[self openDebuggerForBlock: [6 / 7]].
	
	[debugger canStepForward] whileTrue:
		[debugger stepInto.
		self displayWindow].
	
	self assert: debugger process isTerminated.