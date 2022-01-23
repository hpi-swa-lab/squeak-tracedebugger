benchmarks
benchStepOver

	self prepare:
		[self openDebuggerForBlock: [WatchMorph new imageForm]].
	
	debugger stepOver.
	self displayWindow.
	debugger stepOver.
	self displayWindow.
	debugger stepOver.
	self displayWindow.
	self assert: debugger process isTerminated.