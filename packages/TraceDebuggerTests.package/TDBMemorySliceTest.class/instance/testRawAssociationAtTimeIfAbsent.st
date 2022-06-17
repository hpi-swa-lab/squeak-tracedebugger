tests - accessing
testRawAssociationAtTimeIfAbsent

	self
		assert: (1 to: 3) -> 1 equals: (slice rawAssociationAtTime: 1 ifAbsent: [self fail]);
		assert: (1 to: 3) -> 1 equals: (slice rawAssociationAtTime: 2 ifAbsent: [self fail]);
		assert: (1 to: 3) -> 1 equals: (slice rawAssociationAtTime: 3 ifAbsent: [self fail]);
		assert: (4 to: 4) -> object equals: (slice rawAssociationAtTime: 4 ifAbsent: [self fail]);
		assert: (5 to: 6) -> 3 equals: (slice rawAssociationAtTime: 5 ifAbsent: [self fail]);
		assert: (5 to: 6) -> 3 equals: (slice rawAssociationAtTime: 6 ifAbsent: [self fail]).
	self assert: #absent equals: (slice rawAssociationAtTime: 0 ifAbsent: [#absent]).
	self assert: #absent equals: (slice rawAssociationAtTime: 7 ifAbsent: [#absent]).
	
	self deny: (thisContext objectClass: (slice rawAssociationAtTime: 4 ifAbsent: [self fail]) value) isTdbProxyClass.