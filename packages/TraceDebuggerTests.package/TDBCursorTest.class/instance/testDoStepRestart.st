tests - stepping
testDoStepRestart

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #wiffyPlus
			arguments: #())
		stepsAndAssertions:
			#((doStepOver nil (willReallyStore))
			(doRestart nil (willReallyStore))
			(doStepOver nil (willReallyStore willReallySend))
			(doRestart nil (willReallyStore))
			(doStepOver nil (willReallyStore willReallySend willReturn))
			(doRestart nil (willReallyStore))
			(doStepOver nil (willReallyStore willReallySend willReturn))
			(doRestart nil (willReallyStore willReallyStore willReallyStore))
			(doStepOver nil (willReallyStore willReallySend willReturnTopFromMethod))).