tests - accessing
testAtTimeIfAbsent

	self
		assert: 1 equals: (slice atTime: 2 ifAbsent: [self fail]);
		assert: ((slice atTime: 4 ifAbsent: [self fail]) tdbIdentical: object).
	self assert: #absent equals: (slice atTime: 0 ifAbsent: [#absent]).
	self assert: #absent equals: (slice atTime: 7 ifAbsent: [#absent]).
	
	self assert: 4 equals: (slice atTime: 4 ifAbsent: [self fail]) xxxtdbproxyTimeIndex.