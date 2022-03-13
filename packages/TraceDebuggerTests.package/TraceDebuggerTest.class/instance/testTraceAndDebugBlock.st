tests - ui
testTraceAndDebugBlock

	| debugger window |
	window := [TDBTestLogic new plonk] traceAndDebug.
	self addTearDown: [window delete].
	debugger := window model.
	
	self assert: debugger selectedContext homeMethod = thisContext homeMethod.
	self assert: debugger isDisplayingHistory.
	debugger stepOver; stepOver.
	self assert: debugger isDisplayingHistory.
	self assert: debugger selectedContext willReturn.