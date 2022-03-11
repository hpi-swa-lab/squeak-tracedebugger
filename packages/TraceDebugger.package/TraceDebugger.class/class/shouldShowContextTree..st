preferences
shouldShowContextTree: aBoolean

	ShouldShowContextTree := aBoolean.
	
	self shouldShowContextTree ifFalse:
		[self shouldShowContextStack: true].
	
	self changed: #shouldShowContextTree.