initialize-release
initialize

	super initialize.
	
	self shouldIsolate: true. "to read our own writes instead of the previous version that has been stored in the memory."