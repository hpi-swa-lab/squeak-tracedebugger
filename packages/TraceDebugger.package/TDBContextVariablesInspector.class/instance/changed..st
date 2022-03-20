updating
changed: aspect

	aspect = #shouldShowExceptionContexts ifTrue:
		[self updateFields].
	
	^ super changed: aspect