tests - stepping
testDoStepBackFiltered

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonkLong
			arguments: #())
		filter: [:context | context selector ~= #wiffyLong]
		stepsAndAssertions:
			#((doStepInto nil (willReallySend))
			(doStepInto wiffy2 (willReturn))
			(doStepInto wiffy3 (willReturn))
			(doStepBack wiffy2 (willReturn))
			(doStepBack nil (willReallySend))).