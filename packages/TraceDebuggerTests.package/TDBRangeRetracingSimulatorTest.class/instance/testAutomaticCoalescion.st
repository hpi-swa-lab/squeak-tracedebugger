tests
testAutomaticCoalescion

	self
		assertQuery: [thisContext tdbRetracingTimeIndex - thisContext tdbRetracingTimeIndex]
		value: 0.