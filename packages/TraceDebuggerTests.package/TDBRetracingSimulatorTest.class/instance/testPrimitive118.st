tests - primitives
testPrimitive118

	self assert: 3 equals:
		(simulator evaluate: [1 tryPrimitive: 1 withArgs: {2}]).