toolbuilder - constants - color
styleForSignalContext

	^ self userInterfaceTheme styleForSignalContext ifNil:
		[{nil.
		TextEmphasis bold}]