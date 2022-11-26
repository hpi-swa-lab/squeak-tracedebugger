tests
testDebugForks

	| context |
	context := simulator customize:
		[(thisContext tdbRetracingTimeIndex + 1 // 2) even
			ifFalse: [thisContext tdbRetracingTimeIndex]] asContext.
	[context willJumpIfFalse] whileFalse:
		[context := self stepContextIgnoringCoverage: context].

	[context := context step]
		valueSupplyingAnswer: #('*fork*' 2).
	
	[context willReturn] whileFalse:
		[context := self stepContextIgnoringCoverage: context].
	self assertSlice: context top times: {1 to: 1. 2 to: 2} values: {1. 2}.