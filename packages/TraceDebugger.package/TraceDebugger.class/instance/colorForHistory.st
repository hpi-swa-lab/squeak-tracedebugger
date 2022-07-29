toolbuilder - constants - color
colorForHistory

	^ self userInterfaceTheme colorForHistory ifNil:
		[Color red]