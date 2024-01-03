tests - stepping
testDoStepThroughHistory

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #griffleMethodReturnHome2
			arguments: #())
		stepsAndAssertions:
			#((doStepOver nil (willReallySend willReturn))
			(doRestart nil (willReallySend))
			(doStepInto griffleMethodReturn2 (willReallySend))
			(doStepThrough (griffleMethodReturn2 isExecutingBlock) (willReallySend willReallySend))
			(doStepThrough (griffleMethodReturn2 isExecutingBlock) (willReallySend willReturn))
			(doStepThrough (griffleMethodReturn2 isExecutingBlock) (willReturn))
			(doStepThrough (griffleMethodReturn2 isExecutingBlock) (willReallySend willReturn))
			(doStepThrough griffleMethodReturn2 (willReturn))).