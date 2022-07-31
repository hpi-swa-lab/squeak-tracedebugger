tests
testDebugCursor
	
	| cursor debugger window |
	cursor := self cursorClass traceForBlock: [TDBTestLogic doPlonk].
	
	window := self newWindow: [cursor debug].
	debugger := window model.
	
	self assert: debugger selectedContext homeMethod = thisContext homeMethod.
	self assert: debugger isDisplayingHistory.
	
	debugger jumpToPresent.
	self deny: debugger canProceed.