toolbuilder - constants - color
colorForPresent

	^ self userInterfaceTheme colorForPresent ifNil:
		[self class fallbackDebugger new defaultWindowColor]