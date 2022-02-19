preferences
shouldShowContextStack: aBoolean

	ShouldShowContextStack := aBoolean.
	
	self shouldShowContextStack ifFalse:
		[self shouldShowContextTree: true].
	
	self changed: #shouldShowContextStack.