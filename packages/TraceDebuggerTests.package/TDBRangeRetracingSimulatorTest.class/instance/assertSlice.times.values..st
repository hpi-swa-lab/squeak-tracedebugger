asserting
assertSlice: aMemorySlice times: expectedTimes values: expectedValues

	self assert: expectedTimes equals: aMemorySlice times description: #times.
	self assert: aMemorySlice values = expectedValues description: #values.