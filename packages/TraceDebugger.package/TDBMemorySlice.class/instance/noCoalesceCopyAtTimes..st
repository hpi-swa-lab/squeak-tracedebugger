copying
noCoalesceCopyAtTimes: timeInterval

	| lastTimeIndex newIntervals newValues nextTimeIndex newSideEffects |
	timeInterval ifEmpty: [^ self copyEmpty].
	timeInterval first >= intervals first start
		ifFalse: [^ self errorSubscriptBounds: timeInterval first].
	timeInterval last <= intervals last stop
		ifFalse: [^ self errorSubscriptBounds: timeInterval last].
	
	newIntervals := (Array new: intervals size) writeStream.
	newValues := (Array new: intervals size) writeStream.
	newSideEffects := sideEffects ifNotNil: [(Array new: intervals size) writeStream].
	lastTimeIndex := intervals first start - 1.
	self flag: #optimize. "Use binary search for first item?"
	1 to: intervals size do: [:index |
		| interval |
		interval := intervals at: index.
		(nextTimeIndex := interval last) >= timeInterval min ifTrue:
			[lastTimeIndex + 1 <= timeInterval max ifTrue:
				[newIntervals nextPut: ((lastTimeIndex + 1 max: timeInterval min) to: (lastTimeIndex := nextTimeIndex min: timeInterval max)).
				newValues nextPut: (rawValues at: index).
				newSideEffects ifNotNil: [newSideEffects nextPut: (sideEffects at: index)]]]].
	
	^ self species
		memory: memory
		basicIntervals: newIntervals contents
		rawValues: newValues contents
		sideEffects: (newSideEffects ifNotNil: [newSideEffects contents])