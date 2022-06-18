asserting
assertQuery: aBlock unforkedCoalescedValue: expectedValue

	^ self
		assertQuery: [self denyForkDuring: aBlock]
		coalescedValue: expectedValue