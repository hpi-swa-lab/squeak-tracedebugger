testing
testTdbSignalerContexts

	| context exception signaler signalers |
	self assert: self simpleContext tdbSignalerContexts isEmpty.
	
	exception := Exception new.
	context := self contextWithSignaler: exception.
	signalers := context tdbSignalerContexts.
	self assert: 1 equals: signalers size.
	signaler := signalers first.
	self assert: #signal equals: signaler selector.
	self assert: exception equals: signaler receiver.