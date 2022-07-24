accessing - views
object: anObject atTimes: timeIndices collect: aBlock
	"Evaluate aBlock for anObject with the historic states within the specified time range. Answer a TDBMemorySlice of the collected results. Note that aBlock will be evaluated isolatedly and any side effects will be hidden from the rest of the image."

	| slice |
	slice := TDBMemorySlice
		memory: self
		intervals: {timeIndices}
		rawValues: {anObject}.
	^ slice collect: aBlock