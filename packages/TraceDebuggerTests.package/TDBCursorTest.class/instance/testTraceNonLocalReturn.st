tests - trace
testTraceNonLocalReturn

	^ self
		testTraceFor:
			(Context
				sender: nil
				receiver: TDBTestLogic new
				method: TDBTestLogic >> #griffleMethodReturn
				arguments: #())
		like:
			#(griffleMethodReturn 0 15
				((griffle:with: 4 15
					(((griffleMethodReturn 1) 6 8)
					((griffleMethodReturn 1) 11 15
						((wiffy2 13 14))))))).