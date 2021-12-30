tests - stepping
testDoStepIntoFromSender

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonk
			arguments: #())
		step: [:cursor | cursor doStepInto: (cursor context bottomContext
			ifNil: [cursor context])]
		assertions:
			#((nil (willReallySend))
			(wiffy (willReallySend))
			(plonk (willReallySend))
			(ziffy (willReallySend))
			(plonk (willReallySend willReturn isDead))).