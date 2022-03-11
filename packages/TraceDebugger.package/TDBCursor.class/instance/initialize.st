initialize-release
initialize

	super initialize.
	
	timeIndex := 0.
	self contextFilter: self defaultContextFilter.