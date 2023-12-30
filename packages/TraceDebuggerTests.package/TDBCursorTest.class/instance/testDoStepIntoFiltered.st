tests - stepping
testDoStepIntoFiltered

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonk
			arguments: #())
		filter: [:context | context selector ~= #wiffy]
		step: #doStepInto
		assertions:
			#((nil (willReallySend))
			(wiffy2 (willReturn))
			(plonk (willReallySend))
			(ziffy (willReallySend willReturn))
			(plonk (willReallySend willReturnTopFromMethod))).