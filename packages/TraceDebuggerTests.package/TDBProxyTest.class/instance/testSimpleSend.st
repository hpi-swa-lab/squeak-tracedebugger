tests
testSimpleSend

	self assert: 3 equals: proxy plonk.
	self assert: 5 equals: proxy griffle.
	self assert: 8 equals: proxy plonkPlusGriffle.
	
	self assert: proxy yourself = object.
	self assert: proxy = object.
	self assert: proxy = proxy.