tests
testSimpleSend

	self assert: object plonk equals: (simulator evaluate: [object plonk]).
	self assert: 3 equals: (simulator evaluate: [object griffle]).
	self assert: object plonk + 3 equals: (simulator evaluate: [object plonkPlusGriffle]).