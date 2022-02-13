field list menu
inspectSelection

	| object |
	self inspector hasSelection ifFalse: [^ self inspector changed: #flash].
	
	object := self inspector selectionOrObject.
	^ self
		decorateView: (ToolSet inspect: object)
		forObject: object