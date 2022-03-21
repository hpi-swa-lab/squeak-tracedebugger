toolbuilder - constants - color
styleForPreviousContext

	^ self userInterfaceTheme styleForNextContext ifNil:
		[self styleForDeadContext]