screenshots
createSpawnContext

	self recorder writeTo: 'screenshots/spawnContext.png' building: [:helper |
		| window debugger splitter tree child p spawned |
		[4 / 6] debugTrace.
		window := helper foregroundWindow.
		debugger := window model.
		window extent: 500 @ 350.
	
		debugger stepInto; stepOver.
	
		splitter := window allMorphs detect: [:m |
			(m isKindOf: ProportionalSplitterMorph) and: [m splitsTopAndBottom] and: [m splitterAbove isNil]].
		splitter repositionBy: 0 @ 50.
		helper world fullBounds.
	
		tree := helper morphByExternalName: #contextTree in: window.
		tree selectedMorph expand.
		child := tree selectedMorph children last.
		child expand.
		tree adjustSubmorphPositions.
		p := tree center x @ child boundsInWorld center y.
		helper mouseDrag: child from: p to: (p := p + (50 @ 125)) buttons: #(left).
		helper mouseRelease: tree buttons: #(left).
		helper mouseMoveTo: p buttons: #() in: tree.
		debugger jumpToSender; jumpToSender; stepOver.
		spawned := helper foregroundWindow.
		spawned extent: helper foregroundWindow extent / 2; center: p.
	
		helper hand grabMorph: spawned.
		helper spawnHand].