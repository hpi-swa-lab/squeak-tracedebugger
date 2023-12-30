tests - stepping
testDoStepOverHandledError

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #handleError
			arguments: #())
		stepsAndAssertions:
			#((doStepOver nil (willReallySend))
			(doStepThrough handleError (willReallySend))
			(doStepOver handleError (willReturn))
			(doStepThrough nil (willReturnTopFromMethod))).