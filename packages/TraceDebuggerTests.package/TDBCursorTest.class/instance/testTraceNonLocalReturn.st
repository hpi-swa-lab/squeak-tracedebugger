tests - trace
testTraceNonLocalReturn

	^ self
		testTraceFor:
			(Context
				sender: nil
				receiver: TDBTestLogic new
				method: TDBTestLogic >> #griffleMethodReturnHome
				arguments: #())
		like:
			#(griffleMethodReturnHome 0 18
				((griffleMethodReturn 2 17
					((griffle:with: 6 17
						(((griffleMethodReturn 1) 8 10)
						((griffleMethodReturn 1) 13 17
							((wiffy2 15 16))))))))).