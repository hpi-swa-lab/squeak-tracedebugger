tests - stepping
testDoStepIntoFromSender

	self
		runCursorFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonk
			arguments: #())
		stepsAndAssertions:
			{#(doStepInto nil (willReallySend)).
			#(doStepInto wiffy (willReallySend)).
			{[:cursor | cursor doStepInto: cursor context sender]. #wiffy. Array new: 5 withAll: #willReallySend}.
			#(doStepInto wiffy (willReallySend)).
			{[:cursor | cursor doStepInto: cursor context sender]. #wiffy. Array new: 5 withAll: #willReallySend}.
			#(doStepInto wiffy2 (willReturn)).
			{[:cursor | cursor doStepInto: cursor context sender]. #wiffy2. Array new: 5 withAll: #willReturn}.
			{[:cursor | cursor doStepInto: cursor context sender sender]. #wiffy2. Array new: 5 withAll: #willReturn}.
			#(doStepInto wiffy (willReallySend willReturn))}.