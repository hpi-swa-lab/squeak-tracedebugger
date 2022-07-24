toolbuilder - constants - color
styleForError

	^ self userInterfaceTheme styleForError ifNil:
		[{(UserInterfaceTheme current get: #errorColor for: #TestRunner) ifNil: [Color red]}]