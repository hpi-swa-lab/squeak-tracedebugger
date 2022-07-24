code pane menu
exploreCodeSelectionHistory

	| editor expression |
	editor := self codeTextMorph
		ifNil: [^ self changed: #flash]
		ifNotNil: [:morph | morph textMorph editor].
	expression := editor
		lineSelectAndEmptyCheck: [^ self changed: #flash];
		selection.
	
	^ self debugger cursor
		exploreHistory: self doItReceiver
		context: self doItContext
		expression: expression