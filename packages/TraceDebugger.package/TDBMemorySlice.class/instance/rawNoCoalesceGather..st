enumerating - raw values
rawNoCoalesceGather: aBlock
	"Just like #rawGather:, but maintain the time inidices of the receiver and do not coalesce the resulting slice."

	| newIntervals newValue newValues newSideEffects index newSideEffect |
	newIntervals := (Array new: intervals size) writeStream.
	newValues := (Array new: rawValues size) writeStream.
	newSideEffects := sideEffects ifNotNil: [(Array new: rawValues size) writeStream].
	index := 0.
	intervals with: rawValues do: [:interval :rawValue |
		newValue := aBlock value: rawValue.
		newSideEffect := sideEffects ifNotNil: [sideEffects at: (index := index + 1)].
		newValue isTdbMemorySlice
			ifFalse:
				[newIntervals nextPut: interval.
				newValues nextPut: newValue.
				newSideEffects ifNotNil: [newSideEffects nextPut: newSideEffect]]
			ifTrue:
				[| newIndex |
				newValue := newValue noCoalesceAtTimes: interval.
				newIndex := 0.
				newValue intervals with: newValue rawValues do: [:eachInterval :eachValue |
					newIntervals nextPut: eachInterval.
					newValues nextPut: eachValue.
					newSideEffects ifNotNil:
						[newSideEffects nextPut:
							(newValue sideEffects
								ifNil: [newSideEffect]
								ifNotNil: [:sideEffect | sideEffect at: (newIndex := newIndex + 1)])]]]].
	
	^ self species
		memory: memory
		basicIntervals: newIntervals contents
		rawValues: newValues contents
		sideEffects: (newSideEffects ifNotNil: [newSideEffects contents])