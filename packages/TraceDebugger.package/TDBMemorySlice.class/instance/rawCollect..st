enumerating - raw values
rawCollect: aBlock
	"Evaluate aBlock with each of the receiver's raw values. Answer a new slice of the collected results.
	
	Raw protocol. Raw values do not reflect all changes to the object at a certain point in time. Use the common protocol (#collect:) to work with the virtual object states instead."

	^ self species
		memory: memory
		intervals: intervals
		rawValues: (rawValues collect: aBlock)
		sideEffects: sideEffects