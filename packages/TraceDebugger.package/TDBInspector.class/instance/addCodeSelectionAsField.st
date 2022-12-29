code pane menu
addCodeSelectionAsField

	^ self withCodeSelectionDo: [:expression :requestor |
		self inspector addCustomField:
			(self
				createCustomFieldFor: expression
				requestor: requestor
				orCancel: [^ self])]