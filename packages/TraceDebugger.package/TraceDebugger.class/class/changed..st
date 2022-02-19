updating
changed: aspect

	super changed: aspect.
	
	self allSubInstancesDo: [:ea | ea changed: aspect].