toolbuilder - constants - color
colorForPresence

	^ self userInterfaceTheme colorForPresence ifNil:
		[self class fallbackDebugger new defaultWindowColor]