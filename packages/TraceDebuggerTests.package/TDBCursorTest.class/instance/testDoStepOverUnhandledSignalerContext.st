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
			
			"step over unhandled signaler context"
			{#doStepOver. UnhandledError class >> #signalForException:. #(willReallySend willReallySend)}.
			{#doStepOver. UnhandledError >> #defaultAction. #(willReturn)}.
			{#doStepOver. UndefinedObject >> #handleSignal:. #(willReallySend)}.
			{#doStepOver. Context >> #terminate. #(willReturn)}.
			{[:cursor | cursor doStepOver: cursor context sender sender sender "Context >> #resumeEvaluating:through:"]. UnhandledError class >> #signalForException:. #(willReturn)}.
			
			"back in safe waters again"
			{#doStepOver. Error >> #defaultAction. #(willReturn)}.
			{#doStepOver. UndefinedObject >> #handleSignal:. #(willReallySend)}.
			} , self stepsAndAssertionsForContextResumeEvaluating , {
			{#doStepOver. #error:. #(willReturn)}.
			{#doStepOver. #error. #(willReturn)}.
			{#doStepOver. #signalError. #(willReturn isDead)}}.