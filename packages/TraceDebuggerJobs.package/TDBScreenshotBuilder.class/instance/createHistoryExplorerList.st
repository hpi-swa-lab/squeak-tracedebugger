screenshots - history explorer
createHistoryExplorerList

	self recorder writeTo: 'screenshots/HistoryExplorer.png' building: [:helper |
		| window explorer tree contextSlice |
		window := TDBHistoryExplorer exampleRegex.
		window extent: 631 px @ 508 px.
		explorer := window model.
		explorer shouldShrinkColumns: true.
		helper world fullBounds.
		
		tree := helper morphByExternalName: #contextValueTree in: window.
		contextSlice := tree items detect: [:item | '*match:*' match: item contents].
		
		helper
			click: tree
			at: (tree pointAtFraction: 0.45) x @ (contextSlice boundsInWorld pointAtFraction: 0 @ 3 / 4) y
			buttons: #(right).
		helper closeBalloons.
		helper menu y: helper menu y - 10 px.
		
		helper tdbUpdateStyles].