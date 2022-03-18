*TraceDebuggerJobs-utils
tdbSpawnBalloon

	self flag: #moveUpstream.
	
	^ self tdbSpawnMorph: (self world findA: NewBalloonMorph)