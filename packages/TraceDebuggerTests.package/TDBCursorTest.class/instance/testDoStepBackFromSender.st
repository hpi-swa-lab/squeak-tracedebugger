tests - stepping
testDoStepBackFromSender

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonkPlus
			arguments: #())
		stepsAndAssertions:
			{{#doStepInto. nil. #(willReallySend)}.
			{#doStepInto. #wiffyPlus. #(willReallyStore willReallyStore willReallySend)}.
			{[:cursor | cursor doStepBack: cursor context bottomContext]. nil. #(willReallySend)}.
			{#doStepInto. #wiffyPlus. #(willReallyStore)}}.