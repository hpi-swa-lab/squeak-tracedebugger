tests - ui
testDebugTraceProcess

	| debugger window |
	debugger := [TDBTestLogic new plonk] newProcess debugTrace.
	window := debugger containingWindow.
	self addTearDown: [window delete].
	
	self assert: debugger selectedContext selector = #newProcess.
	self deny: debugger isDisplayingHistory.
	debugger stepOver; stepInto.
	self assert: debugger selectedContext homeMethod = thisContext homeMethod.