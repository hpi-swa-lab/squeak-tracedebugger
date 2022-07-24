tests
testMaintainSlices

	simulator timeIndices: (1 to: 3).
	
	self assertQuery: [thisContext tdbRetracingTimeIndex] values: {1. 2. 3}.
	self assertQuery: [{thisContext tdbRetracingTimeIndex}] values: {{1}. {2}. {3}}.
	
	[self assertQuery: [{thisContext tdbRetracingTimeIndex}. nil] values: {nil}]
		on: TestFailure
		do: [:ex |
			self flag: #gc. "See comment in #finalSlice:withTimeIndicesWithin:."]