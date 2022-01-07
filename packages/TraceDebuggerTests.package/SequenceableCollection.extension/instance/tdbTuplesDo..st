*TraceDebuggerTests-Core-enumerating
tdbTuplesDo: aBlock
	
	^ self do: [:tuple |
		aBlock valueWithArguments: tuple]