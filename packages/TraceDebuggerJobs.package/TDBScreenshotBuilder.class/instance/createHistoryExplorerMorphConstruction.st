screenshots - history explorer
createHistoryExplorerMorphConstruction

	self recorder writeTo: 'screenshots/exampleMorphConstruction.png' building: [:helper |
		| window explorer tree contextSlice hSplitter vSplitter |
		"pin time"
		thisContext wrap: [:block |
			| oldNow |
			oldNow := Time class methodDict at: #now.
			Time class methodDict at: #now put: [thisContext return: (Time hour: 11 minute: 5 second: 42)] method.
			block ensure:
				[Time class methodDict at: #now put: oldNow]].
		"pin printString"
		thisContext wrap: [:block |
			self assert: (WatchMorph methodDict includesKey: #printOn:) not.
			WatchMorph methodDict at: #printOn: put: [:stream | thisContext return: (stream nextPutAll: 'a WatchMorph(4034574)')] method.
			block ensure:
				[WatchMorph methodDict removeKey: #printOn:]].
		
		window := TDBHistoryExplorer exampleMorphConstruction.
		window extent: 586 @ 620.
		explorer := window model.
		explorer contextLabelTruncation: #(2 0).
		
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