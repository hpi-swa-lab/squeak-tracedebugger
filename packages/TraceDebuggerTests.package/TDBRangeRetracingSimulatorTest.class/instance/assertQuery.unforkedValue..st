asserting
assertQuery: aBlock unforkedValue: expectedValue

	^ self
		assertQuery: [self denyForkDuring: aBlock]
		value: expectedValue