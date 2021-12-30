tests - stepping
testDoStepOverError

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #signalError
			arguments: #())
		stepsAndAssertions:
			{{#doStepOver. nil. #(willReallySend)}.
			{#doStepOver. #error:. #(willReturn)}.
			{#doStepInto. #error. #(willReturn)}.
			{#doStepInto. #signalError. #(willReturn isDead)}}.