tests - primitives
testPrimitivePerform

	"No vectors"
	self assert: false equals:
		(simulator evaluate: [1 perform: #even]).
	
	self assert: object plonk + 3 equals:
		(simulator evaluate: [object perform: #plonkPlusGriffle]).
	
	"Failing method lookup"
	simulator evaluate:
		[self
			should: [object perform: #absentMessage]
			raise: MessageNotUnderstood].