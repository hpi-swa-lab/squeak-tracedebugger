class initialization
initialize

	UseProxiesAlways := true.
	
	Mirror := thisContext. "Used for accessing miror primitives while avoiding frequent invocations of the expensive bytecode pushThisContext."