tests - primitives
testSIMDUnary

	"No vectors"
	self assertQuery: [1 class] value: SmallInteger.
	
	self
		assertQuery: [thisContext tdbRetracingTimeIndex class]
		unforkedCoalescedValue: SmallInteger.
	
	"Partially failing primitive"
	simulator timeIndices: (1 to: 2).
	self
		assertQuery:
			[({nil. #(1)} at: thisContext tdbRetracingTimeIndex)
				basicSize]
		values: {0. 1}.