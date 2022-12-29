field list menu
stepToChange

	self hasSelection ifFalse: [^ self changed: #flash].
	
	(self cursor
		doStepToPromptedChangeFor: self doItReceiver
		context: self doItContext
		expression: (self expressionForField: self selectedField)
		ifCanceled: [^ self])
			ifFalse: [^ self changed: #flash].
	
	self flag: #refactor. "Move update inside stepping method together with all other stepping methods. See comment in TraceDebugger>>#update:."
	self cursor changed: #cursorPosition.