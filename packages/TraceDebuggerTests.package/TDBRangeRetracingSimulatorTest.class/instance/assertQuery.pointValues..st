asserting
assertQuery: aBlock pointValues: expectedValues

	^ self
		assertQuery: aBlock
		times: simulator timeIndices
		values: expectedValues