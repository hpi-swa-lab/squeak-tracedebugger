toolbuilder - constants - color
colorForHistory

	^ self userInterfaceTheme colorForHistory ifNil:
		[Color r: 0.7 g: 0.567 b: 0.359]