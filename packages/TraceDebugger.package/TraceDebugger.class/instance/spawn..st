actions
spawn: aContext

	^ self copy
		borderContexts: (self borderContexts copyWith: aContext);
		open