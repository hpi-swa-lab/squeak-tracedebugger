actions
spawnContext: aContext

	^ self copy
		borderContexts: (self borderContexts copyWith: aContext);
		open