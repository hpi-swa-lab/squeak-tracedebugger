field list menu
exploreSelection

	| object |
	object := self inspector selectionOrObject.
	^ self displaySnapshotView:
		(ToolSet explore: object label:
			('{1} [snapshot]' format: {object defaultLabelForInspector}))