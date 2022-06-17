tests
testJump

	"No vectors"
	self
		assertQuery:
			[2 even
				ifTrue: [true]]
		value: true.
	
	self
		assertQuery:
			[thisContext tdbRetracingTimeIndex even
				ifTrue: [true]]
		values: {true. nil. true. nil. true}.