tests - stepping
testDoStepBack

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #wiffyPlus
			arguments: #())
		stepsAndAssertions:
			#((doStepOver nil (willReallyStore willReallyStore willReallySend willReturn))
			(doStepBack nil (willReallySend willReallyStore willReallyStore))
			(doStepOver nil (willReallyStore willReallySend))
			(doStepBack nil (willReallyStore))
			(doStepOver nil (willReallySend willReturn))
			(doStepBack nil (willReallySend))
			(doStepOver nil (willReturn isDead))).