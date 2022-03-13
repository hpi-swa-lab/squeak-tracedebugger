tests - ui
testTraceAndDebugProcess

	| debugger window |
	window := [TDBTestLogic new plonk] newProcess traceAndDebug.
	self addTearDown: [window delete].
	debugger := window model.
	
	self assert: debugger selectedContext selector = #newProcess.
	self assert: debugger isDisplayingHistory.
	debugger stepInto.
	self assert: debugger isDisplayingHistory.
	self assert: debugger selectedContext homeMethod = thisContext homeMethod.