running
performNotebookTest

	| process home |
	self shouldntRaise: [self runNotebook].
	self flag: #TestCoverage. "We run the notebook normally before because DebuggerMethodMap is not compatible with TestCoverage wrappers"
	
	self flag: #forLater. "Instead of the Debugger, invoke the Compiler with context-specific do-its."
	
	process := Process
		forBlock: [self runNotebook] runUntil: [:ctx |
			ctx isBottomContext not and: [ctx sender selector = #runNotebook]].
	home := process suspendedContext.
	debugger := self debuggerClass new
		process: process context: home;
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