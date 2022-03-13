tests - ui
testDebugTraceBlock

	| debugger window |
	window := [TDBTestLogic new plonk] debugTrace.
	self addTearDown: [window delete].
	debugger := window model.
	
	self assert: debugger selectedContext homeMethod = thisContext homeMethod.
	self deny: debugger isDisplayingHistory.
	debugger stepOver; stepOver.
	self assert: debugger selectedContext willReturn.