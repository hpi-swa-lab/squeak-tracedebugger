enumerating - raw values
rawWithTimesGather: aBlock
	"Same like #rawGather:, but also pass on the current time interval to aBlock.
	
	Note: Due to performance reasons/lack of demand, sideEffects are not preserved during this transformation."

	| newIntervals newValue newValues |
	newIntervals := (Array new: intervals size) writeStream.
	newValues := (Array new: rawValues size) writeStream.
	intervals with: rawValues do: [:interval :rawValue |
		newValue := aBlock value: rawValue value: interval.
		newValue isTdbMemorySlice
			ifFalse:
				[newIntervals nextPut: interval.
				newValues nextPut: newValue]
			ifTrue:
				[newValue intervals with: newValue rawValues do: [:eachInterval :eachValue |
					newIntervals nextPut: eachInterval.
					newValues nextPut: eachValue]]].
	
	^ self species
		memory: memory
		intervals: newIntervals contents
		rawValues: newValues contents