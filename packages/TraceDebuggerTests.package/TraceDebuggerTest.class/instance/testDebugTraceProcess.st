tests - ui
testDebugTraceProcess

	| debugger window |
	debugger := [TDBTestLogic new plonk] newProcess debugTrace.
	window := self newWindow: [debugger containingWindow].
	
	self assert: debugger selectedContext selector = #newProcess.
	self deny: debugger isDisplayingHistory.
	debugger stepOver; stepInto.
	self assert: debugger selectedContext homeMethod = thisContext homeMethod.