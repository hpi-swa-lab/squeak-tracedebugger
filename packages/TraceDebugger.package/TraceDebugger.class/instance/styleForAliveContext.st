toolbuilder - constants - color
styleForAliveContext

	^ self userInterfaceTheme styleForAliveContext ifNil:
		[{(self userInterfaceTheme get: #default for: #SHTextStylerST80)
			ifNotNil: [:spec | spec asOrderedCollection first "color"]
			ifNil: [Color black]}]