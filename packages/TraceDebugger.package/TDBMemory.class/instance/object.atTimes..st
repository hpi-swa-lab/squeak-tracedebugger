accessing - views
object: anObject atTimes: timeIndices

	^ TDBMemorySlice
		memory: self
		intervals: {timeIndices}
		rawValues: {anObject}