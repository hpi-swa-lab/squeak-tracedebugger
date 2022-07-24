field list menu
exploreFieldHistory

	^ self debugger cursor
		exploreHistory: self doItReceiver
		context: self doItContext
		expression: (self expressionForField: self selectedField)