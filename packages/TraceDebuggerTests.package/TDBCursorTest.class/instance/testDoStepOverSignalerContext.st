tests - stepping
testDoStepOverSignalerContext

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #signalError
			arguments: #())
		stepsAndAssertions:
			{{#doStepInto. nil. #(willReallySend)}.
			{#doStepInto. #error. #(willReallySend)}.
			{#doStepInto. #error:. #(willReallySend)}.
			{#doStepOver. #error:. #(willReallySend)}.
			{#doStepInto. Exception >> #signal:. #(willReallySend)}.
			{#doStepOver. Exception >> #signal:. #(willReallySend)}.
			{#doStepOver. Error >> #defaultAction. #(willReturn)}.
			{#doStepOver. Context >> #terminate. #(willReturn)}
				flag: #forLater "these context details are not really desired but allow for the most logical implementation for now".
			{#doStepOver. Context >> #resumeEvaluating:. #(willReallySend willReturn)}.
			{#doStepOver. #error:. #(willReturn)}.
			{#doStepOver. #signalError. #(willReturn isDead)}}.