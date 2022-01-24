toolbuilder - constants
defaultWindowColor

	^ self isDisplayingHistory
		ifTrue: [self colorForHistory]
		ifFalse: [self colorForPresence]