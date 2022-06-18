tests
testMessageSend

	simulator timeIndices: (1 to: 3).
	
	"No vectors"
	self assertQuery: [1 even] value: false.
	
	"Same receiver class"
	self assertQuery: [({1. 2. 3} at: thisContext tdbRetracingTimeIndex) even] values: {false. true. false}.
	"Same method class"
	self assertQuery: [({1.0. 2.0. 3 / 2} at: thisContext tdbRetracingTimeIndex) even] values: {false. true. false}.
	"Different method classes"
	self assertQuery: [({1. 2.0. 3 / 2} at: thisContext tdbRetracingTimeIndex) even] values: {false. true. false}.
	
	"Argument vector"
	self assertQuery: [2 raisedTo: thisContext tdbRetracingTimeIndex] values: {2. 4. 8}.
	
	"All of the above"
	self assertQuery: [thisContext tdbRetracingTimeIndex raisedTo: thisContext tdbRetracingTimeIndex] values: {1. 4. 27}.
	
	"Partially failing method lookup"
	self
		assertQuery:
			[[({1. 2.0. nil} at: thisContext tdbRetracingTimeIndex) even]
				on: MessageNotUnderstood do: [nil]]
		values: {false. true. nil}.