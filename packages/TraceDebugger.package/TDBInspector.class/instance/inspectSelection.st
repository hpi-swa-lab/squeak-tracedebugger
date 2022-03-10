field list menu
inspectSelection

	self inspector hasSelection ifFalse: [^ self inspector changed: #flash].
	
	^ self inspectObject: self inspector selectionOrObject