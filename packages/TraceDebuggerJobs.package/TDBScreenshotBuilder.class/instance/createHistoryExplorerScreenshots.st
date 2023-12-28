screenshots - history explorer
createHistoryExplorerScreenshots

	self recorder writeInto: 'screenshots' recordSeries: [:recorder :helper |
		| window explorer tree contextSlice |
		window := TDBHistoryExplorer exampleRegex.
		window extent: 597 px @ 360 px.
		explorer := window model.
		explorer shouldShrinkColumns: true.
		helper world fullBounds.
		
		recorder writeTo: 'historyExplorerSmall.png' building: [helper tdbUpdateStyles].
		
		window height: 400 px.
		helper world fullBounds.
		tree := helper morphByExternalName: #contextValueTree in: window.
		contextSlice := tree items detect: [:item | item contents endsWith: ''''].	
		recorder writeTo: 'historyExplorerCompactionMenu.png' frame: [(tree pointAtFraction: 1 / 11) x @ contextSlice boundsInWorld top rect: helper menu bottomRight] building:
			[| compactItem |
			helper
				click: tree
				at: (tree pointAtFraction: 1 / 2) x @ (contextSlice boundsInWorld pointAtFraction: 0 @ 2 / 3) y
				buttons: #(right).
			helper closeBalloons.
			compactItem := helper menuItemMorphLabeled: 'compact labels' in: helper menu.
			helper mouseEnter: compactItem.
			helper world doOneCycleNow]].