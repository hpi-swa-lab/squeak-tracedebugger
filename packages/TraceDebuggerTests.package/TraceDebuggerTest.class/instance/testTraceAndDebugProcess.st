tests - ui
testTraceAndDebugProcess

	| debugger window |
	window := self newWindow:
		[[TDBTestLogic new plonk] newProcess traceAndDebug].
	debugger := window model.
	
	self assert: debugger selectedContext selector = #newProcess.
	self assert: debugger isDisplayingHistory.
	debugger stepInto.
	self assert: debugger isDisplayingHistory.
	self assert: debugger selectedContext homeMethod = thisContext homeMethod.