tests - primitives
testPrimitivePerform

	simulator timeIndices: (1 to: 3).
	
	"No vectors"
	self assertQuery: [1 perform: #even] value: false.
	
	"Same receiver class"
	self
		assertQuery: [({1. 2. 3} at: thisContext tdbRetracingTimeIndex) perform: #even]
		values: {false. true. false}.
	"Same method class"
	self
		assertQuery: [({1.0. 2.0. 3 / 2} at: thisContext tdbRetracingTimeIndex) perform: #even]
		values: {false. true. false}.
	"Different method classes"
	self
		assertQuery: [({1. 2.0. 3 / 2} at: thisContext tdbRetracingTimeIndex) perform: #even]
		values: {false. true. false}.
	
	"Partially failing method lookup"
	self
		assertQuery:
			[[({1. 2.0. nil} at: thisContext tdbRetracingTimeIndex) perform: #even]
				on: MessageNotUnderstood do: [nil]]
		values: {false. true. nil}.