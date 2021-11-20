initialize-release
initialize

	super initialize.
	
	memory := TDBMemory new.
	children := OrderedDictionary new.