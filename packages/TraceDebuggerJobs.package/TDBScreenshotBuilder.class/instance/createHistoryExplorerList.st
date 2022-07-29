screenshots
createHistoryExplorerList

	self recorder writeTo: 'screenshots/historyExplorerList.png' building: [:helper |
		| window explorer tree contextSlice |
		window := TDBHistoryExplorer exampleRegex.
		window height: 500.
		explorer := window model.
		explorer shouldShrinkColumns: true.
		helper world fullBounds.
		
		tree := helper morphByExternalName: #contextValueTree in: window.
		contextSlice := tree items detect: [:item | item contents beginsWith: 'characterSet'].
		
		helper
			click: tree
			at: (tree pointAtFraction: 0.77) x @ (contextSlice boundsInWorld pointAtFraction: 0 @ 2 / 3) y
			buttons: #(right).
		helper closeBalloons.
		
		helper tdbUpdateStyles].