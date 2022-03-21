toolbuilder - constants - color
styleForNextContext

	^ self userInterfaceTheme styleForNextContext ifNil:
		[{self styleForAliveContext first "color" mixed: 1 / 2 with:
			self styleForDeadContext first "color".
		TextEmphasis italic}]