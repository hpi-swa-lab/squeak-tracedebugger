code pane menu
addCodeSelectionAsField

	| editor expression |
	self flag: #moveUpstream.
	
	editor := self codeTextMorph
		ifNil: [^ self changed: #flash]
		ifNotNil: [:morph | morph textMorph editor].
	expression := editor
		lineSelectAndEmptyCheck: [^ self changed: #flash];
		selection.
	
	self inspector addCustomField:
		(self
			createCustomFieldFor: expression
			requestor: editor
			orCancel: [^ self]).