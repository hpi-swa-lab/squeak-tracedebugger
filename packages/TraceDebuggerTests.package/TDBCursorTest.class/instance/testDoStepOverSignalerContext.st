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
			
			"step over signaler context"
			{#doStepOver. Exception >> #signal:. #(willReallySend)}.
			{#doStepOver. Error >> #defaultAction. #(willReturn)}.
			{#doStepOver. UndefinedObject >> #handleSignal:. #(willReallySend)}.
			} , self stepsAndAssertionsForContextResumeEvaluating , {
			
			"back in safer waters again"
			{#doStepOver. #error:. #(willReturn)}.
			{#doStepOver. #error. #(willReturn)}.
			{#doStepOver. #signalError. #(willReturn isDead)}}.