toolbuilder - constants
colorForDeadContext

	^ self userInterfaceTheme colorForDeadContext ifNil:
		[(self userInterfaceTheme get: #tempVar for: #SHTextStylerST80)
			asOrderedCollection first]