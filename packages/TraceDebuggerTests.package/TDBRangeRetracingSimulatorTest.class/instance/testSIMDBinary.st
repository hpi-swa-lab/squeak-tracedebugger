tests - primitives
testSIMDBinary

	"No vectors"
	self assertQuery: [1 + 2] unforkedValue: 3.
	
	self
		assertQuery: [thisContext tdbRetracingTimeIndex + 1]
		unforkedValues: {1. 2. 3. 4. 5}.
	self
		assertQuery: [1 + thisContext tdbRetracingTimeIndex]
		unforkedValues: {1. 2. 3. 4. 5}.
	self
		assertQuery: [thisContext tdbRetracingTimeIndex + thisContext tdbRetracingTimeIndex]
		unforkedValues: {0. 2. 4. 6. 8}.
	
	"Partially failing primitive"
	simulator timeIndices: (1 to: 2).
	self
		assertQuery:
			[({1. 2.0} at: thisContext tdbRetracingTimeIndex)
				+ 1]
		values: {2. 3.0}.