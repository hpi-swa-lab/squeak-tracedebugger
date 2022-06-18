initialize-release
setMemory: aMemory intervals: anArray rawValues: anotherArray sideEffects: memories

	self
		setMemory: aMemory
		basicIntervals: anArray
		rawValues: anotherArray
		sideEffects: memories.
	self initializeIntervals.