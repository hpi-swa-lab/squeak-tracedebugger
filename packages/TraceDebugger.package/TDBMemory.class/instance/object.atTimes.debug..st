accessing - views
object: anObject atTimes: timeIndices debug: aBlock
	"Bring up a debugger tracing aBlock for anObject with the historic states within the specified time range. Note that aBlock will be evaluated isolatedly and any side effects will be hidden from the rest of the image. Experimental."

	| slice |
	slice := TDBMemorySlice
		memory: self
		intervals: {timeIndices}
		rawValues: {anObject}.
	^ slice debug: aBlock