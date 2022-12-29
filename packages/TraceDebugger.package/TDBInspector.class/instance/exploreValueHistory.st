field list menu
exploreValueHistory

	^ self cursor
		exploreHistory: self selectionOrObject
		context: self doItContext
		expression: nil