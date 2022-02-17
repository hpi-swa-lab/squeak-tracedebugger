tests - stepping
testDoStepThroughUntil

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #griffleMethodReturn
			arguments: #())
		stepsAndAssertions:
			{{[:cursor | cursor doStepThroughUntil: [:context | context size > 0 and: [context top = 3]]]. #(griffleMethodReturn isExecutingBlock). #(willReturn)}}.