screenshots
createInspectorScreenshots

	self recorder writeInto: 'screenshots' recordSeries: [:recorder :helper |
		| window debugger rip |
		helper worldColor: Color transparent.
		window := [2 / 3] traceAndDebug.
		debugger := window model.
	
		[debugger findContext] valueSupplyingAnswer: #('*signature*' 'Fraction>>setNumerator:denominator: {private}').
		debugger stepOver; stepOver; stepOver.
		debugger receiverInspector selectFieldNamed: 'nominator'.
		debugger contextVariablesInspector selectFieldNamed: 'thisContext'.
	
		rip := window
			findDeepSubmorphThat: [:m | m knownName = #valuePane and: [m model == debugger receiverInspector]]
			ifAbsent: [self error].
	
		recorder writeTo: 'snapshotInspectors.png' building: [
			| si se |
			helper keyStroke: rip key: $a modifiers: #(cmd).
			helper type: 'self' into: rip.
			helper keyStroke: rip key: $i modifiers: #(cmd).
			si := helper foregroundWindow.
			helper keyStroke: rip key: $i modifiers: #(cmd shift).
			se := helper foregroundWindow.
			si extent: si extent / 1.5.
			se extent: se extent / 1.5.
			se topLeft: si topRight + (10 @ 0).
			window beKeyWindow. "fast hack to display none of the windows as a key window"
			helper takeScreenshotOfAll: {si. se}.
			si delete.
			se delete].
	
		recorder writeTo: 'addAsField.png' frame: [window fullBounds * (0 @ 0.7 corner: 0.6 @ 1)] building: [
			helper keyStroke: rip key: $a modifiers: #(cmd).
			helper type: 'self storeString' into: rip.
			helper keyStroke: rip key: $p modifiers: #(cmd).
			helper keyStroke: rip key: Character home modifiers: #(shift).
			helper keyStroke: rip key: Character escape.
			
			helper closeBalloons.
			helper menu position: rip position + (10 @ 25)]].