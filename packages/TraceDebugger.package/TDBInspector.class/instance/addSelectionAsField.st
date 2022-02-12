code pane menu
addSelectionAsField

	| expression |
	self flag: #moveUpstream.
	
	expression := self codeTextMorph
		ifNil: [^ self changed: #flash]
		ifNotNil: [:morph | morph textMorph editor
			lineSelectAndEmptyCheck: [^ self changed: #flash];
			selection].
	
	self inspector addCustomField: (self
		createCustomFieldFor: expression
		orCancel: [^ self changed: #flash]).