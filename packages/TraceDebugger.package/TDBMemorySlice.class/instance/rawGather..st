enumerating - raw values
rawGather: aBlock
	"Evaluate aBlock with each of the receiver's raw values. Answer a new slice of the collected results. All block results that are other slices will be flattened, so the new slice might have different time intervals."

	^ (self rawNoCoalesceGather: aBlock)
		initializeIntervals