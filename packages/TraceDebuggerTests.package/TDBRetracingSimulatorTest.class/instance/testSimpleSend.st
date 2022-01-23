tests
testSimpleSend

	| simulator |
	memory object: object priorTo: 4 instVarAt: 2 put: 3.
	simulator := self classUnderTest forMemory: memory atTime: 3.
	
	self assert: object plonk equals: (simulator evaluate: [object plonk]).
	self assert: 3 equals: (simulator evaluate: [object griffle]).
	self assert: object plonk + 3 equals: (simulator evaluate: [object plonkPlusGriffle]).