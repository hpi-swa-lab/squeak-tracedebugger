testing
testTdbSignalContexts

	| context exception signaler signalers |
	self assert: self simpleContext tdbSignalContexts isEmpty.
	
	exception := Exception new.
	context := self contextWithSignaler: exception.
	signalers := context tdbSignalContexts.
	self assert: 1 equals: signalers size.
	signaler := signalers first.
	self assert: #signal equals: signaler selector.
	self assert: exception equals: signaler receiver.