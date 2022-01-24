benchmarks
benchStepOver

	self prepare:
		[self openDebuggerForBlock: [WatchMorph new imageForm]].
	
	5 timesRepeat:
		[debugger stepOver.
		self displayWindow].
	self assert: debugger process isTerminated.