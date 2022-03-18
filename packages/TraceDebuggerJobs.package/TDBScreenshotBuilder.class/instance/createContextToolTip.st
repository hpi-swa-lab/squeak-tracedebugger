screenshots
createContextToolTip

	self recorder writeTo: 'screenshots/contextToolTip.png' frame: [:bounds | bounds * (0.03 @ 0.1 rect: 0.7 @ 0.32)] building: [:helper |
		| window debugger splitter tree child |
		helper worldColor: Color transparent.
		[4 / 6] debugTrace.
		window := helper foregroundWindow.
		debugger := window model.
	
		debugger stepInto; stepInto; stepOver; stepOver; stepOver.
	
		splitter := window allMorphs detect: [:m |
			(m isKindOf: ProportionalSplitterMorph) and: [m splitsTopAndBottom] and: [m splitterAbove isNil]].
		splitter repositionBy: 0 @ 100.
		helper world fullBounds.
	
		tree := helper morphByExternalName: #contextTree in: window.
		child := tree selectedMorph children last.
		child expand.
		tree adjustSubmorphPositions.
		helper mouseMoveTo: tree center x @ child boundsInWorld center y buttons: #() in: tree.
	
		helper hand spawnBalloonFor: child.
		helper tdbSpawnMorph: window.
		helper tdbSpawnBalloon.
		helper spawnHand.
		helper mouseMoveTo: tree center x @ child boundsInWorld center y buttons: #() in: tree].