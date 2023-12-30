tests - stepping
testDoStepThrough

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #griffleMethodReturn
			arguments: #())
		step: #doStepThrough
		assertions:
			#((nil (willReallySend))
			((griffleMethodReturn isExecutingBlock) (willReallySend willReturn))
			((griffleMethodReturn isExecutingBlock) (willReallySend willReturn))
			(nil ())).