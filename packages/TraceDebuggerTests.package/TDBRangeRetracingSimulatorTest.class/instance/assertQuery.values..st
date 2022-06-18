asserting
assertQuery: aBlock values: expectedValues

	| slice |
	slice := simulator evaluate: aBlock.
	self assert: simulator timeIndices asArray equals: slice times flattened.
	self assert: slice values = expectedValues description: #values.