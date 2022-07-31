asserting
assert: expected matches: actual

	expected isString ifFalse: [^ self assert: expected asString matches: actual].
	
	self
		assert: (expected match: actual)
		description: [self comparingStringBetween: expected and: actual].
	assertions addLast: expected.