tests
testTdbHandlerContexts

	| handlerAction context handler handlers |
	self assert: self simpleContext tdbHandlerContexts isEmpty.
	
	handlerAction := [:ex | ex pass].
	context := self contextWithHandler: handlerAction.
	handlers := context tdbHandlerContexts.
	self assert: 1 equals: handlers size.
	handler := handlers first.
	self assert: handler isHandlerContext.
	self assert: handlerAction equals: (handler tempAt: 2).