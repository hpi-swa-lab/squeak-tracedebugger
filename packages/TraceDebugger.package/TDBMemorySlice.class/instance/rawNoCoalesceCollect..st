enumerating - raw values
rawNoCoalesceCollect: aBlock
	"Just like #rawCollect:, but maintain the time inidices of the receiver and do not coalesce the resulting slice."

	^ self species
		memory: memory
		basicIntervals: intervals
		rawValues: (rawValues collect: aBlock)
		sideEffects: sideEffects