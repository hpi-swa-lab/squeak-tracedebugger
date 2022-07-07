accessing - views
object: anObject debug: aBlock
	"Bring up a debugger tracing aBlock for anObject with all historic states. Note that aBlock will be evaluated isolatedly and any side effects will be hidden from the rest of the image. Experimental."

	^ self
		object: anObject
		atTimes: (0 to: maxTimeIndex + 1)
		debug: aBlock