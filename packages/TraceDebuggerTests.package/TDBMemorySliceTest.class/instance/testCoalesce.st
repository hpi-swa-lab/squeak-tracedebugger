tests - private
testCoalesce

	slice := self classUnderTest
		memory: memory
		intervals: {1 to: 2. 3 to: 4. 5 to: 6. 7 to: 8. 9 to: 10}
		rawValues: {1. 2. 3. 4. 5}.
	
	slice coalesce: [:a :b | a // 2 = (b // 2)].
	
	self
		assert: {1 to: 2. 3 to: 6. 7 to: 10} equals: slice times;
		assert: {1. 2. 4} equals: slice values.