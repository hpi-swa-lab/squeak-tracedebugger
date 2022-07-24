tests - enumerating
testRawCondense

	| copy |
	slice := self classUnderTest
		memory: memory
		intervals: {1 to: 2. 3 to: 4. 5 to: 6. 7 to: 8. 9 to: 10}
		rawValues: {1. 2. 3. 4. 5}.
	
	copy := slice rawCondense: [:a :b | a // 2 = (b // 2)].
	
	self assert: {1 to: 2. 3 to: 6. 7 to: 10} equals: copy times.
	self assert: 3 equals: copy rawValues size.
	self assert: 1 equals: (copy rawValues at: 1).
	self
		assert: {3 to: 4. 5 to: 6} equals: (copy rawValues at: 2) times;
		assert: {2. 3} equals: (copy rawValues at: 2) rawValues.
	self
		assert: {7 to: 8. 9 to: 10} equals: (copy rawValues at: 3) times;
		assert: {4. 5} equals: (copy rawValues at: 3) rawValues.