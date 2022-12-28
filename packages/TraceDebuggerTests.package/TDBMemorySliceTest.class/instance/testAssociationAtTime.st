tests - accessing
testAssociationAtTime

	self
		assert: (slice associationAtTime: 3) = ((1 to: 3) -> 1);
		assert: (slice associationAtTime: 4) = ((4 to: 4) -> object).
	self shouldRaiseError: [slice associationAtTime: 0].
	self shouldRaiseError: [slice associationAtTime: 7].
	
	self assert: (4 to: 4) equals: (slice associationAtTime: 4) value xxxtdbproxyTimeIndices.
	
	slice setSideEffects: {nil. sideEffects. nil}.
	self assert: sideEffects identical: (slice associationAtTime: 4) value xxxtdbproxySideEffects.