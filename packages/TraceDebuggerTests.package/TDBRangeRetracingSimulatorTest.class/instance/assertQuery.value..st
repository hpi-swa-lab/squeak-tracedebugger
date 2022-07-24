asserting
assertQuery: aBlock value: expectedValue

	^ self
		assertQuery: aBlock
		times: {simulator timeIndices}
		values: {expectedValue}