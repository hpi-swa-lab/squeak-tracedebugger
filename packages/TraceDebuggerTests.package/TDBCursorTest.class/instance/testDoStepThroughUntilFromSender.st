tests - stepping
testDoStepThroughUntilFromSender

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #griffleMethodReturn
			arguments: #())
		stepsAndAssertions:
			{#(doStepOver nil (willReallySend)).
			#(doStepInto #griffle:with: (willReallySend)).
			{[:cursor | cursor doStepThrough: cursor context sender until: [:context |
				self assert: context selector = #griffleMethodReturn.
				context size > 0 and: [context top = 3]]].
			#(griffleMethodReturn isExecutingBlock). #(willReturn)}}.