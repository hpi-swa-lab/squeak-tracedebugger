toolbuilder - constants - color
styleForDeadContext

	^ self userInterfaceTheme styleForDeadContext ifNil:
		[{(self userInterfaceTheme get: #tempVar for: #SHTextStylerST80)
			ifNotNil: [:spec | spec asOrderedCollection first "color"]
			ifNil: [Color darkGray]}]