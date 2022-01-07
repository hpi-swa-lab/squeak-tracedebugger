tests - stepping
testDoStepInto

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonk
			arguments: #())
		step: #doStepInto
		assertions:
			#((nil (willReallySend))
			(wiffy (willReallySend willReallySend))
			(wiffy2 (willReturn))
			(wiffy (willReallySend willReturn))
			(plonk (willReallySend))
			(ziffy (willReallySend willReturn))
			(plonk (willReallySend willReturn isDead))).