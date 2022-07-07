asserting
assertQuery: aBlock coalescedValue: expectedValue

	^ self
		assertQuery: aBlock
		coalescedValues: {expectedValue}