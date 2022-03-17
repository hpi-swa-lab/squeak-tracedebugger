toolbuilder - constants - color
defaultWindowColor

	^ self isDisplayingHistory
		ifTrue: [self colorForHistory]
		ifFalse: [self colorForPresence]