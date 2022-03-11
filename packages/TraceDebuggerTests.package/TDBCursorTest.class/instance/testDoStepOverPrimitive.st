tests - stepping
testDoStepOverPrimitive

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #doPrimitive
			arguments: #())
		stepsAndAssertions:
			#((doStepOver nil (willReallySend willReallySend))
			(doStepInto primitive (willReallySend))
			(doStepInto ziffy (willReallySend willReturn))
			(doStepInto primitive (willReturn))
			(doStepOver nil (willReallySend willReturn))
			
			(doRestart nil (willReallySend))
			(doStepOver nil (willReallySend willReallySend willReturn))
			
			(doStepBack nil (willReallySend willReallySend willReallySend))
			(doStepOver nil (willReallySend willReallySend))
			(doStepBack nil (willReallySend))
			(doStepInto primitive (willReallySend))
			(doStepOver primitive (willReturn))
			(doStepBack primitive (willReallySend))).