code pane menu
stepToNextChangeOfCodeSelection

	self withCodeSelectionDo: [:expression :requestor |
		(self cursor
			doStepToNextChangeFor: self doItReceiver
			context: self doItContext
			expression: expression
			requestor: requestor)
				ifFalse: [^ self changed: #flash].
		
		self flag: #refactor. "Move update inside stepping method together with all other stepping methods. See comment in TraceDebugger>>#update:."
		self cursor changed: #cursorPosition.
		
		"Restore previous expression"
		self
			changed: #editString with: expression;
			changed: #inputRequested with: #contents].