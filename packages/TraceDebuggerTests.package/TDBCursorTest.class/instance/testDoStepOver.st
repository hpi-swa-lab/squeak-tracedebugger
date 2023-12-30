tests - stepping
testDoStepOver

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonk
			arguments: #())
		step: #doStepOver
		assertions:
			#((nil (willReallySend willReallySend willReallySend willReturnTopFromMethod))).