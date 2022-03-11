toolbuilder
controlButtonSpecs

	^
		#(('Proceed'	proceed		'close the debugger and proceed (p)'	canProceed)
		('Restart'		restart			'reset this context to its start (r)'		canStepBackward)
		('Into'			stepInto		'step into next message send (e)'		canStepForward)
		('Over'			stepOver		'step over next message send (t)'		canStepForward)
		('Through'		stepThrough	'step into next block/out of current block (T)'				canStepForward)
		('Back'			stepBack		'rewind before previous message send (B)'		canStepBackward)
		('Where'		showWhere		'select next expression (w)'				hasContextSelected))