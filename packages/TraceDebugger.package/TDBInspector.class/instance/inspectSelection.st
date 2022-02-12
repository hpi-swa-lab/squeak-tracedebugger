field list menu
inspectSelection

	| object |
	self inspector hasSelection ifFalse: [^ self inspector changed: #flash].
	
	object := self inspector selectionOrObject.
	^ self displaySnapshotView:
		(ToolSet inspect: object label:
			('{1} [snapshot]' format: {object defaultLabelForInspector})).