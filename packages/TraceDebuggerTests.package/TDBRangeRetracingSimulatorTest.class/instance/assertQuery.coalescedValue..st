asserting
assertQuery: aBlock coalescedValue: expectedValue

	| slice |
	slice := (simulator evaluate: aBlock) coalescedEqually.
	self assert: simulator timeIndices asArray equals: slice times flattened.
	self assert: slice values = {expectedValue} description: #values.