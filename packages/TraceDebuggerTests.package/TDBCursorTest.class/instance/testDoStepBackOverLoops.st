tests - stepping
testDoStepBackOverLoops
	"Regression test."

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #doLoop
			arguments: #())
		stepsAndAssertions:
			#((doStepOver nil (willReallySend willReturn))
			(doStepBack nil (willReallySend))
			(doStepInto loop (willReallySend willReallyStore willReallySend willReturn))
			(doStepBack loop (willReallySend willReallyStore willReallySend))
			(doStepBack nil (willReallySend))).