screenshots
createScreenshot

	self recorder writeTo: 'screenshots/TraceDebugger.png' building: [:helper |
		| window debugger splitter tree child cvp |
		window := ['A' matchesRegex: '((?<=^)A)+'] traceAndDebug.
		debugger := window model.
	
		helper scaleWindow: window extent: 671 @ 523.
		splitter := window allMorphs detect: [:m |
			(m isKindOf: ProportionalSplitterMorph) and: [m splitsTopAndBottom] and: [m splitterAbove isNil]].
		splitter repositionBy: 0 @ 157.
		splitter splitterBelow repositionBy: 0 @ 14.
		helper world fullBounds.
	
		[debugger findContext] valueSupplyingAnswer: #('*signature*' 'RxMatcher>>matchAgainstLookbehind:positive:nextLink: {matching}').
		debugger receiverInspector selectFieldNamed: 'markerCount'.
		debugger contextVariablesInspector selectFieldNamed: 'stack top'.
	
		cvp := window
			findDeepSubmorphThat: [:m | m knownName = #valuePane and: [m model == debugger contextVariablesInspector]]
			ifAbsent: [self error].
		helper keyStroke: cvp key: $a modifiers: #(cmd).
		helper type: 'stream peek' into: cvp.
		helper keyStroke: cvp key: $p modifiers: #(cmd).
	
		tree := helper morphByExternalName: #contextTree in: window.
		child := tree selectedMorph children last.
		child expand.
		child firstChild expand.
		child firstChild firstChild expand.
		tree adjustSubmorphPositions.
		tree scrollToBottom.
	
		helper click: tree at: (tree pointAtFraction: 4 / 5) x @ (tree selectedMorph boundsInWorld pointAtFraction: 4 / 5) y buttons: #(right).
		helper closeBalloons.
		helper menu
			tdbRemoveAllSelectors: #(proceed restart stepInto stepOver stepThrough stepBack showWhere copyBugReportToClipboard);
			tdbRemoveAllSelectors: #(offerMenuFrom:shifted:) reverse: true.
		helper menu position: helper menu position + (-28 @ 12)].