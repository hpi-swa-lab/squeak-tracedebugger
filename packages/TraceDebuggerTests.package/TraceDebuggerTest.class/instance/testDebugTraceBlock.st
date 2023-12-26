tests - ui
testDebugTraceBlock
	<timeout: 10 "seconds">

	| debugger window |
	window := self newWindow: [[TDBTestLogic new plonk] debugTrace].
	debugger := window model.
	
	self assert: debugger selectedContext homeMethod = thisContext homeMethod.
	self deny: debugger isDisplayingHistory.
	debugger stepOver; stepOver.
	self assert: debugger selectedContext willReturn.