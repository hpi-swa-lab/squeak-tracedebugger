updating
changed: aspect

	super changed: aspect.
	
	BroadcastingPreferenceChanges ifTrue:
		[self allSubInstancesDo: [:ea | ea changed: aspect]].