tests
testMessageChain

	self assert: 3 equals: proxy yourself plonk.
	self assert: 5 equals: (proxy in: [:it | it griffle]).
	self assert: 8 equals: (proxy perform: #plonkPlusGriffle).