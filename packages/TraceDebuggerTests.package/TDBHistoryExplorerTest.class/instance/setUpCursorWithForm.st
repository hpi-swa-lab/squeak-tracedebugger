running
setUpCursorWithForm

	| morph form |
	morph := RectangleMorph new.
	morph
		extent: 15 @ 10;
		color: Color yellow;
		borderColor: Color green.
	logic := TDBTestLogic new.
	cursor := self cursorClass traceForBlock:
		[form := morph imageForm].
	^ form