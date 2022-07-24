running
setUpCursorWithMorph

	| morph |
	logic := TDBTestLogic new.
	cursor := self cursorClass traceForBlock:
		[morph := Morph new.
		morph extent: 15 @ 3.
		morph color: Color red].
	^ morph