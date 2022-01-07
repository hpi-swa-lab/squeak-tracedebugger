tests - stepping
testDoStepOverUnhandledSignalerContext

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
			{#doStepInto. Exception >> #signal. #(willReallySend)}.
			{#doStepOver. Exception >> #signal. #(willReallySend willReallyStore willReallySend willReallySend)}.
			{#doStepInto. UndefinedObject >> #handleSignal:. #(willReallySend)}.
			{#doStepInto. Error >> #defaultAction. #(willReallySend)}.
			{#doStepInto. UnhandledError class >> #signalForException:. #(willReallySend)}.
			{#doStepOver. UnhandledError class >> #signalForException:. #(willReallySend willReallySend)}.
			{#doStepOver. UnhandledError >> #defaultAction. #(willReturn)}.
			{#doStepOver. Context >> #resumeEvaluating:. #(willReallySend willReturn)}.
			{#doStepOver. Error >> #defaultAction. #(willReturn)}.
			{#doStepOver. Context >> #resumeEvaluating:. #(willReallySend willReturn)}.
			{#doStepOver. #error:. #(willReturn)}.
			{#doStepOver. #signalError. #(willReturn isDead)}}.