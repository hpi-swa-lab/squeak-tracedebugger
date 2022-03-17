tests - trace
testTraceSimple

	^ self
		testTraceFor:
			(Context
				sender: nil
				receiver: TDBTestLogic new
				method: TDBTestLogic >> #plonk
				arguments: #())
		like:
			#(plonk 0 20
				((wiffy 3 10
					((wiffy2 7 8)))
				(ziffy 14 17))).