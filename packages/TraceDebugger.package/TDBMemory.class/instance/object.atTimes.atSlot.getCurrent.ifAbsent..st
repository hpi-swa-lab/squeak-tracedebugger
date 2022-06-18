private
object: anObject atTimes: timeIndices atSlot: slot getCurrent: currentBlock ifAbsent: absentBlock

	| runs intervals lastTimeIndex rawValues nextTimeIndex |
	timeIndices isInterval
		ifFalse: [^ self error: 'timeIndices must be an interval'].
	timeIndices first >= 0
		ifFalse: [^ self error: 'all timeIndices must be positive'].
	
	runs := (values at: anObject ifAbsent: [^ absentBlock value])
		at: slot ifAbsent: [^ absentBlock value].
	
	intervals := (Array new: runs size + 1) writeStream.
	rawValues := (Array new: runs size + 1) writeStream.
	lastTimeIndex := timeIndices first - 1.
	1 to: runs size do: [:index |
		| run |
		run := runs at: index.
		(nextTimeIndex := run first) >= timeIndices first ifTrue:
			[lastTimeIndex + 1 <= timeIndices last ifTrue:
				[intervals nextPut: ((lastTimeIndex + 1 max: timeIndices first) to: (lastTimeIndex := nextTimeIndex min: timeIndices last)).
				rawValues nextPut: run second]]].
	lastTimeIndex < timeIndices last ifTrue:
		[intervals nextPut: (lastTimeIndex + 1 to: timeIndices last).
		rawValues nextPut: currentBlock value].
	
	^ TDBMemorySlice
		memory: self
		intervals: intervals contents
		rawValues: rawValues contents