menus
exploreValueHistory

	^ self cursor
		exploreHistory: self object
		context: self doItContext
		expression: nil