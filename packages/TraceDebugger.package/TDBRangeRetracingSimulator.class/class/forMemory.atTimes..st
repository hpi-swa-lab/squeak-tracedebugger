instance creation
forMemory: aMemory atTimes: timeIndices

	^ self new
		memory: aMemory;
		timeIndices: timeIndices;
		yourself