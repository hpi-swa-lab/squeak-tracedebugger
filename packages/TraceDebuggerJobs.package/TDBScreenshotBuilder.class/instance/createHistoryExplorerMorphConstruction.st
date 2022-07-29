screenshots
createHistoryExplorerMorphConstruction

	self recorder writeTo: 'screenshots/historyExplorerList.png' building: [:helper |
		| window explorer tree contextSlice hSplitter vSplitter |
		window := TDBHistoryExplorer exampleMorphConstruction.
		window extent: 586 @ 600.
		explorer := window model.
		
		vSplitter := window allMorphs detect: [:m |
			(m isKindOf: ProportionalSplitterMorph) and: [m splitsTopAndBottom]].
		hSplitter := window allMorphs detect: [:m |
			(m isKindOf: ProportionalSplitterMorph) and: [m splitsLeftAndRight]].
		vSplitter repositionBy: 0 @ -27.
		hSplitter repositionBy: 120 @ 0.
		helper world fullBounds.
		
		tree := helper morphByExternalName: #contextTree in: window.
		contextSlice := tree items detect: [:item | item contents beginsWith: 'createLabels'].
		
		helper
			click: tree
			at: tree center x @ contextSlice boundsInWorld center y
			buttons: #(left).
		
		helper tdbUpdateStyles].