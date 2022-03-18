figures
figureTraceIt

	| button debugger process window |
	process := Process forContext: (thisContext activateMethod: SmallInteger >> #/ withArgs: {6} receiver: 4).
	debugger := Debugger new
		process: process context: process suspendedContext;
		initializeFull;
		yourself.
	window := ToolBuilder build: debugger.
	window extent: 500 @ 300.
	button := window allMorphs detect: [:m | m isButton and: [m label = 'Trace It']].
	button updateFillStylePressing: true hovering: false.
	^ (window imageFormForRectangle: (((window fullBounds translateBy: window fullBounds origin negated) scaleBy: 1 @ 0.53) translateBy: window fullBounds origin))
		offset: 0;
		yourself