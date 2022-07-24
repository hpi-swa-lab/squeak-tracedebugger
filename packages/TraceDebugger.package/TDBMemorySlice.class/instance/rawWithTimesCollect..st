enumerating - raw values
rawWithTimesCollect: aBlock
	"Note: Due to performance reasons/lack of demand, sideEffects are not preserved during this transformation."

	^ self species
		memory: memory
		intervals: intervals
		rawValues: (rawValues with: intervals collect: aBlock)