running
performNotebookTest

	| process home |
	self shouldntRaise: [self runNotebook].
	self flag: #TestCoverage. "We run the notebook normally before because DebuggerMethodMap is not compatible with TestCoverage wrappers (critical sections)."
	
	self flag: #forLater. "Instead of the Debugger, invoke the Compiler with context-specific do-its."
	
	process := Process
		forBlock: [self runNotebook] runUntil: [:ctx |
			ctx isBottomContext not and: [ctx sender selector = #runNotebook] and: [ctx sender willReturn]].
	home := process suspendedContext.
	debugger := self debuggerClass new
		process: process context: home;
		initializeFull;
		yourself.
	debugger stepOver.
	
	[home isDead] whileFalse:
		[| context top |
		context := debugger selectedContext.
		context willReallySend
			ifFalse:
				[debugger stepOver.
				top := context top]
			ifTrue:
				["complete step but do not yet pop"
				debugger resetContext:
					(context := debugger interruptedProcess completeStep: context).
				top := context top.
				context willReallySend ifFalse:
					[debugger stepOver]].
		
		self context: home findNextAssertion: [:assertion |
			self assert: assertion matches: top printString]].
	
	self should: nextAssertionString isNil.
	self should: assertions notEmpty.