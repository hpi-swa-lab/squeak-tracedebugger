tests - accessing
testRangeValueAtTimeIfAbsent

	self
		assert: (slice rangeValueAtTime: 3 ifAbsent: [self fail]) = 1;
		assert: (slice rangeValueAtTime: 4 ifAbsent: [self fail]) = object.
	self assert: #absent equals: (slice rangeValueAtTime: 0 ifAbsent: [#absent]).
	self assert: #absent equals: (slice rangeValueAtTime: 7 ifAbsent: [#absent]).
	
	self assert: (4 to: 4) equals: (slice rangeValueAtTime: 4 ifAbsent: [self fail]) xxxtdbproxyTimeIndices.
	
	slice setSideEffects: {nil. sideEffects. nil}.
	self assert: sideEffects identical: (slice rangeValueAtTime: 4 ifAbsent: [self fail]) xxxtdbproxySideEffects.