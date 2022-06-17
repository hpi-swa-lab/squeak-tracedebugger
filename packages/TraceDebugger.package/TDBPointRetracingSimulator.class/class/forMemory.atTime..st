instance creation
forMemory: aMemory atTime: timeIndex

	^ self new
		memory: aMemory;
		timeIndex: timeIndex;
		yourself