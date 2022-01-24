tests - stepping
testDoStepRestartFromSender

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonk
			arguments: #())
		stepsAndAssertions:
			{{#doStepInto. nil. #(willReallySend)}.
			{#doStepInto. #wiffy. #(willReallySend willReallySend)}.
			{#doStepInto. #wiffy2. #(willReturn)}.
			{[:cursor | cursor doRestart: cursor context bottomContext]. nil. #(willReallySend)}.
			{#doStepInto. #wiffy. #(willReallySend willReallySend)}.
			{#doStepInto. #wiffy2. #(willReturn)}}.