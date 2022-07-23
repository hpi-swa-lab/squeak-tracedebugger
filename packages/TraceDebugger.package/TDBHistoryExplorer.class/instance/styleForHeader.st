toolbuilder - constants - color
styleForHeader

	^ self userInterfaceTheme styleForHeader ifNil:
		[{nil. TextEmphasis bold}]