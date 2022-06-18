tests - accessing
testRawAtTime

	self
		assert: 1 equals: (slice rawAtTime: 2);
		assert: object identical: (slice rawAtTime: 4).
	self shouldRaiseError: [slice rawAtTime: 0].
	self shouldRaiseError: [slice rawAtTime: 7].
	
	self deny: (thisContext objectClass: (slice rawAtTime: 4)) isTdbProxyClass.