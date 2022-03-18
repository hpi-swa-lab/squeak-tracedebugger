figures - private
figureButtonNamed: label

	| button debugger window |
	debugger := TraceDebugger forBlock: [4 / 6].
	debugger stepInto.
	window := ToolBuilder build: debugger.
	window fullBounds.
	button := window allMorphs detect: [:m | m isButton and: [m label = label]].
	^ button imageForm
		offset: 0;
		yourself