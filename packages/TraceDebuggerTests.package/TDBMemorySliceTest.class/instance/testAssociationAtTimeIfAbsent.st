tests - accessing
testAssociationAtTimeIfAbsent

	self
		assert: (slice associationAtTime: 3 ifAbsent: [self fail]) = ((1 to: 3) -> 1);
		assert: (slice associationAtTime: 4 ifAbsent: [self fail]) = ((4 to: 4) -> object).
	self assert: #absent equals: (slice associationAtTime: 0 ifAbsent: [#absent]).
	self assert: #absent equals: (slice associationAtTime: 7 ifAbsent: [#absent]).
	
	self assert: (4 to: 4) equals: (slice associationAtTime: 4 ifAbsent: [self fail]) value xxxtdbproxyTimeIndices.
	
	slice setSideEffects: {nil. sideEffects. nil}.
	self assert: sideEffects identical: (slice associationAtTime: 4 ifAbsent: [self fail]) value xxxtdbproxySideEffects.