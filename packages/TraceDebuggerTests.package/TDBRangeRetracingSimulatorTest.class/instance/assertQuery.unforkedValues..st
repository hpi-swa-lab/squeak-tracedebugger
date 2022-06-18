asserting
assertQuery: aBlock unforkedValues: expectedValues

	^ self
		assertQuery: [self denyForkDuring: aBlock]
		values: expectedValues