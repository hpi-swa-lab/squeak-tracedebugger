field list menu
exploreFieldHistory

	^ self cursor
		exploreHistory: self doItReceiver
		context: self doItContext
		expression: (self expressionForField: self selectedField)