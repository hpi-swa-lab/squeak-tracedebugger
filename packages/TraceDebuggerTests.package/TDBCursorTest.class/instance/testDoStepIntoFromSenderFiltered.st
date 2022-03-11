tests - stepping
testDoStepIntoFromSenderFiltered

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonk
			arguments: #())
		filter: [:context | context selector ~= #wiffy]
		step: [:cursor | cursor doStepInto: (cursor context bottomContext
			ifNil: [cursor context])]
		assertions:
			#((nil (willReallySend))
			(wiffy2 (willReturn))
			(plonk (willReallySend))
			(ziffy (willReallySend))
			(plonk (willReallySend willReturn isDead))).