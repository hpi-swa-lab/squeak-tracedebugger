running
performNotebookTest

	| home |
	self flag: #forLater. "Instead of the Debugger, invoke the Compiler with context-specific do-its."
	
	home := self notebookContext.
	debugger := self debuggerClass new
		process: (Process forContext: home) context: home;
		initializeFull;
		yourself.
	debugger stepOver.
	
	[home isDead] whileFalse:
		[| context top |
		context := debugger selectedContext.
		context willReallySend ifTrue:
			["complete step but do not yet pop"
			debugger resetContext:
				(context := debugger interruptedProcess completeStep: context)].
		top := context top.
		debugger stepOver.
		
		self findNextAssertion: [:assertion |
			self assert: assertion equals: top printString]].
	self should: nextAssertionString isNil.