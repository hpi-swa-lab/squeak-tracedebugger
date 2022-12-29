screenshots
createExploreFieldHistory

	self recorder writeInto: 'screenshots' recordSeries: [:recorder :helper |
		| window debugger rip splitter |
		['\w+' asRegex] traceAndDebug.
		window := helper foregroundWindow.
		debugger := window model.
		window extent: 600 @ 425.
		
		[debugger findContext] valueSupplyingAnswer: #('*signature*' 'ReadStream(PositionableStream)>>on: {private}').
		4 timesRepeat: [debugger stepOver].
		splitter := window allMorphs detect: [:m |
			(m isKindOf: ProportionalSplitterMorph) and: [m splitsTopAndBottom] and: [m splitterBelow isNil]].
		splitter repositionBy: 0 @ -75.
		helper world fullBounds.
		
		rip := window
			findDeepSubmorphThat: [:m | m isPluggableListMorph and: [m model == debugger receiverInspector]]
			ifAbsent: [self error].
		recorder writeTo: 'exploreFieldHistory.png' frame: [window fullBounds * (0 @ 0.6175 corner: 0.48 @ 1)] building:
			[helper
				click: rip
				at: ((helper boundsOfItemMatching: 'position' in: rip) pointAtFraction: (2 / 3) asPoint)
				buttons: #(right).
			helper mouseEnter: (helper menuItemMorphLabeled: 'explore field history*' in: helper menu).
			helper closeBalloons]].