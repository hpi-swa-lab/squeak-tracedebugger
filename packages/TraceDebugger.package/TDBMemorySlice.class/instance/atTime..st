accessing
atTime: timeIndex
	"Answer the value at the requested timeIndex. The value may be a transparent view (TDBProxy)."

	^ self atTime: timeIndex ifAbsent: [self errorSubscriptBounds: timeIndex]