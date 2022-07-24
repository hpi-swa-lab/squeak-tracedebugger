enumerating - raw values
rawCondense: aBlock
	"Evaluate aBlock with each overlapping pair of the receiver's raw values. If aBlock answers true for a pair, condense both values into a nested slice. Answer a new slice of the collected results. See also #coalesced: for only keeping the first value of each group.
	
	Note: Due to performance reasons/lack of demand, sideEffects are not preserved during this transformation."

	| newIntervals newValues lastInterval lastValue fold |
	newIntervals := (Array new: intervals size) writeStream.
	newValues := (Array new: rawValues size) writeStream.
	lastInterval := nil.
	fold := nil.
	1 to: intervals size do: [:index |
		|interval rawValue |
		interval := intervals at: index.
		rawValue := rawValues at: index.
		lastInterval
			ifNil:
				[lastInterval := interval.
				lastValue := rawValue]
			ifNotNil:
				[(aBlock value: rawValue value: lastValue)
					ifFalse:
						[newIntervals nextPut: lastInterval.
						newValues nextPut:
							(fold
								ifNil: [lastValue]
								ifNotNil:
									[fold
										setMemory: memory
										basicIntervals: fold intervals contents
										rawValues: fold rawValues contents]).
						lastInterval := interval.
						lastValue := rawValue.
						fold := nil]
					ifTrue:
						[fold
							ifNil:
								[fold := self species
									memory: nil
									basicIntervals:
										((Array new: 4) writeStream
											nextPut: lastInterval;
											nextPut: interval;
											yourself)
									rawValues:
										((Array new: 4) writeStream
											nextPut: lastValue;
											nextPut: rawValue;
											yourself)]
							ifNotNil:
								[fold intervals nextPut: interval.
								fold rawValues nextPut: rawValue].
						lastInterval := lastInterval , interval]]].
	
	newIntervals nextPut: lastInterval.
	newValues nextPut:
		(fold
			ifNil: [lastValue]
			ifNotNil:
				[fold
					setMemory: memory
					basicIntervals: fold intervals contents
					rawValues: fold rawValues contents]).
	
	^ self species
		memory: memory
		intervals: newIntervals contents
		rawValues: newValues contents