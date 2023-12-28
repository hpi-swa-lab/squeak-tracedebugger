screenshots
createExampleShutDown
	"Expensive!"

	self recorder writeTo: 'screenshots/exampleShutDown.png' building: [:helper |
		| window debugger tree splitter |
		[TraceDebugger exampleShutDown] valueSuppressingMessages: #('*shutDown/startUp*').
		window := helper foregroundWindow.
		window extent: 564 px @ 1538 px.
		debugger := window model.
	
		tree := helper morphByExternalName: #contextTree in: window.
		tree selectedMorph expand.
		tree selectedMorph children do: #expand.
		tree adjustSubmorphPositions.
	
		debugger contextFilter
			excludePackage: 'Collections';
			excludedSelectors: #(at:ifAbsent: scaledIdentityHash send:toClassesNamedIn:with:).
	
		splitter := window allMorphs detect: [:m |
			(m isKindOf: ProportionalSplitterMorph) and: [m splitsTopAndBottom] and: [m splitterAbove isNil]].
		splitter splitterBelow repositionBy: 0 @ 150 px.
		[window fullBounds. tree vIsScrollbarNeeded] whileTrue: [splitter repositionBy: 0 @ 1 px]]