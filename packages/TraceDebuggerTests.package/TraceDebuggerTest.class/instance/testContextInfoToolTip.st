tests
testContextInfoToolTip

	| debugger |
	debugger := self newDebuggerOn:
		(Process forBlock: [TDBTestLogic new braffle]).
	
	debugger stepOver; stepInto.
	self should: debugger selectedContext selector = #braffle.
	debugger stepThrough.
	self should: debugger selectedContext isClosureContext.
	self should: debugger selectedContext willReallySend.
	
	self
		assert: 'self: a TDBTestLogic\[x]: 2\[y]: 3' withCRs
		equals: (debugger contextInfoToolTipFor: debugger selectedContext) asString.
	
	debugger stepInto.
	self should: debugger selectedContext selector = #braffle:with:.
	self should: debugger selectedContext willReallySend.
	
	self
		assert: 'self: a TDBTestLogic\alpha: 2\beta: 3' withCRs
		equals: (debugger contextInfoToolTipFor: debugger selectedContext) asString.
	
	debugger jumpToSender; stepOver; jumpToCallee; stepOver.
	self should: debugger selectedContext selector = #braffle:with:.
	self should: debugger selectedContext willReturn.
	
	self
		assert: 'self: a TDBTestLogic\alpha: 2\beta: 3\^ 6' withCRs
		equals: (debugger contextInfoToolTipFor: debugger selectedContext) asString.