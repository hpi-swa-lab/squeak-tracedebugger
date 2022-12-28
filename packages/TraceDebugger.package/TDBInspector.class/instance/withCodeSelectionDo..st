private
withCodeSelectionDo: aBlock

	| editor expression |
	self flag: #moveUpstream.
	
	editor := self codeTextMorph
		ifNil: [^ self changed: #flash]
		ifNotNil: [:morph | morph textMorph editor].
	expression := editor
		lineSelectAndEmptyCheck: [^ self changed: #flash];
		selection.
	
	^ aBlock cull: expression cull: editor