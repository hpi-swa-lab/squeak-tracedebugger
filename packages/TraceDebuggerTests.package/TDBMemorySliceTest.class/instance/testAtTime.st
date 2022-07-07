tests - accessing
testAtTime

	slice setSideEffects: {nil. sideEffects. nil}.
	self
		assert: 1 equals: (slice atTime: 2);
		assert: ((slice atTime: 4) tdbIdentical: object);
		assert: sideEffects identical: (slice atTime: 4) xxxtdbproxySideEffects.
	self shouldRaiseError: [slice atTime: 0].
	self shouldRaiseError: [slice atTime: 7].
	
	self assert: #(4) equals: (slice atTime: 4) xxxtdbproxyTimeIndex asOrderedCollection asArray.