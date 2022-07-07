field list menu
exploreValueHistory

	^ self debugger cursor
		exploreHistory: self selectionOrObject
		context: self doItContext
		expression: nil