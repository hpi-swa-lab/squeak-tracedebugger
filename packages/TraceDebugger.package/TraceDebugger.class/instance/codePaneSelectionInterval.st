accessing - code pane
codePaneSelectionInterval

	^ self codeTextMorph
		ifNotNil: [:cp | cp selectionInterval]
		ifNil: [0 to: 0]