tests - stepping
testDoStepIntoFromSenderFiltered

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonk
			arguments: #())
		filter: [:context | context selector ~= #wiffy]
		stepsAndAssertions:
			{#(doStepInto nil (willReallySend)).
			#(doStepInto wiffy2 (willReturn)).
			{[:cursor | cursor doStepInto: cursor context sender]. #wiffy2. Array new: 5 withAll: #willReturn}.
			{[:cursor | cursor doStepInto: cursor context sender sender]. #wiffy2. Array new: 5 withAll: #willReturn}.
			#(doStepInto plonk (willReallySend))}.