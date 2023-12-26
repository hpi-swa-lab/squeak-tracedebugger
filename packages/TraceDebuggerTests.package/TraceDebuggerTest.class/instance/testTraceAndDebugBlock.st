tests - ui
testTraceAndDebugBlock
	<timeout: 10 "seconds">

	| debugger window |
	window := self newWindow:
		[[TDBTestLogic new plonk] traceAndDebug].
	debugger := window model.
	
	self assert: debugger selectedContext homeMethod = thisContext homeMethod.
	self assert: debugger isDisplayingHistory.
	debugger stepOver; stepOver.
	self assert: debugger isDisplayingHistory.
	self assert: debugger selectedContext willReturn.