asserting
assertQuery: aBlock coalescedValues: expectedValues

	| slice |
	slice := (simulator evaluate: aBlock) coalescedEqually.
	self assert: simulator timeIndices asArray equals: slice times flattened.
	self assert: slice values = expectedValues description: #values.