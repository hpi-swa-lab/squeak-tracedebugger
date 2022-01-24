toolbuilder
controlButtonSpecs

	^
		#(('Proceed'	proceed		'close the debugger and proceed'	canProceed)
		('Restart'		restart			'reset this context to its start'		canStepBackward)
		('Into'			stepInto		'step into next message send'		canStepForward)
		('Over'			stepOver		'step over next message send'		canStepForward)
		('Through'		stepThrough	'step into next block'				canStepForward)
		('Back'			stepBack		'rewind before previous message send'		canStepBackward)
		('Where'		showWhere		'select next expression'))