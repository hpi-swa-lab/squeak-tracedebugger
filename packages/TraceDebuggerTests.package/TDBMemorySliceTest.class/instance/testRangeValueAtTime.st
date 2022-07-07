tests - accessing
testRangeValueAtTime

	self
		assert: (slice rangeValueAtTime: 3) = 1;
		assert: (slice rangeValueAtTime: 4) = object.
	self shouldRaiseError: [slice rangeValueAtTime: 0].
	self shouldRaiseError: [slice rangeValueAtTime: 7].
	
	self assert: (4 to: 4) equals: (slice rangeValueAtTime: 4) xxxtdbproxyTimeIndices.
	
	slice setSideEffects: {nil. sideEffects. nil}.
	self assert: sideEffects identical: (slice rangeValueAtTime: 4) xxxtdbproxySideEffects.