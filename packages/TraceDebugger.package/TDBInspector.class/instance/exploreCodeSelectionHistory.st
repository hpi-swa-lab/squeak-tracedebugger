code pane menu
exploreCodeSelectionHistory

	^ self withCodeSelectionDo: [:expression :requestor |
		self cursor
			exploreHistory: self doItReceiver
			context: self doItContext
			expression: expression
			requestor: requestor]