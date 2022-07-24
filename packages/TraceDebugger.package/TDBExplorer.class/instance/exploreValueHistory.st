menus
exploreValueHistory

	^ self debugger cursor
		exploreHistory: self object
		context: self doItContext
		expression: nil