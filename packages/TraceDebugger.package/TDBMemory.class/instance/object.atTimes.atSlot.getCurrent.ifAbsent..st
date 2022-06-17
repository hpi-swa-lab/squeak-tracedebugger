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
	lastTimeIndex := timeIndices min - 1.
	1 to: runs size do: [:index |
		| run |
		run := runs at: index.
		(nextTimeIndex := run first) >= timeIndices min ifTrue:
			[lastTimeIndex + 1 <= timeIndices max ifTrue:
				[intervals nextPut: ((lastTimeIndex + 1 max: timeIndices min) to: (lastTimeIndex := nextTimeIndex min: timeIndices max)).
				rawValues nextPut: run second]]].
	lastTimeIndex < timeIndices max ifTrue:
		[intervals nextPut: (lastTimeIndex + 1 to: timeIndices max).
		rawValues nextPut: currentBlock value].
	
	^ TDBMemorySlice
		memory: self
		intervals: intervals contents
		rawValues: rawValues contents