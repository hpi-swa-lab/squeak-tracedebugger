tests
testNoIsolateState

	self assert: 2 equals:
		(simulator evaluate:
			[object plonk: 2.
			object plonk]).
	self assert: 2 equals: object plonk.