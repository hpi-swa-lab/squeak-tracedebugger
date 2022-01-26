initialize-release
initialize

	super initialize.
	
	memory := TDBMemory new.
	children := OrderedDictionary new.
	timeInterval := 1 to: 0.
	maxTimeIndex := 0.