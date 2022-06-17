accessing - raw values
rawAtTime: timeIndex
	"Answer the raw value at the requested timeIndex.
	
	Raw protocol. The raw value does not reflect all changes to the object at the requested point in time. Use the common protocol (#atTime:ifAbsent:) to retrieve a transparent view on the object state instead."

	^ self rawAtTime: timeIndex ifAbsent: [self errorSubscriptBounds: timeIndex]