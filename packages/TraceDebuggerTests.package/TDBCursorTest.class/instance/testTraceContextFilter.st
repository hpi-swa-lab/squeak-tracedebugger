tests - trace
testTraceContextFilter

	| makeContext |
	makeContext := [Context
		sender: nil
		receiver: TDBTestLogic new
		method: TDBTestLogic >> #plonk
		arguments: #()].
	
	self
		testTraceFor: makeContext value
		contextFilter: [:context | context selector ~= #wiffy2]
		like:
			#(plonk 0 20
				((wiffy 3 10)
				(ziffy 14 17))).
	self
		testTraceFor: makeContext value
		contextFilter: [:context | context selector ~= #wiffy]
		like:
			#(plonk 0 20
				((wiffy2 7 8)
				(ziffy 14 17))).