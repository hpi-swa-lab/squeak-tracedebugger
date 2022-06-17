tests - accessing
testRawAtTimeIfAbsent

	self
		assert: 1 equals: (slice rawAtTime: 2 ifAbsent: [self fail]);
		assert: object identical: (slice rawAtTime: 4 ifAbsent: [self fail]).
	self assert: #absent equals: (slice rawAtTime: 0 ifAbsent: [#absent]).
	self assert: #absent equals: (slice rawAtTime: 7 ifAbsent: [#absent]).
	
	self deny: (thisContext objectClass: (slice rawAtTime: 4 ifAbsent: [self fail])) isTdbProxyClass.