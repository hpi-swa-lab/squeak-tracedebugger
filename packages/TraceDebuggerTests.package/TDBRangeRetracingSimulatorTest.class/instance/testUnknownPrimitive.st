tests - primitives
testUnknownPrimitive

	simulator timeIndices: (1 to: 2).
	
	"No vectors"
	self assertQuery: [Smalltalk vmParameterAt: 40] unforkedValue: (Smalltalk vmParameterAt: 40).
	
	self
		assertQuery: [({Smalltalk. Smalltalk shallowCopy} at: thisContext tdbRetracingTimeIndex) vmParameterAt: 40]
		values: {Smalltalk vmParameterAt: 40. Smalltalk copy vmParameterAt: 40}.
	self
		assertQuery: [Smalltalk vmParameterAt: thisContext tdbRetracingTimeIndex - 1 + 40]
		values: {Smalltalk vmParameterAt: 40. Smalltalk vmParameterAt: 41}.
	self
		assertQuery: [({Smalltalk. Smalltalk shallowCopy} at: thisContext tdbRetracingTimeIndex) vmParameterAt: thisContext tdbRetracingTimeIndex - 1 + 40]
		values: {Smalltalk vmParameterAt: 40. Smalltalk copy vmParameterAt: 41}.
	
	"Partially failing primitive"
	self
		assertQuery:
			[Smalltalk vmParameterAt: ({40. SmallInteger maxVal} at: thisContext tdbRetracingTimeIndex)]
		values: {Smalltalk vmParameterAt: 40. nil}.