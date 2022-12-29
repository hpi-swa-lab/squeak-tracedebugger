accessing
associationAtTime: timeIndex
	"Answer an association (interval -> value) containing the requested timeIndex. The value may be a transparent view (TDBRangeProxy)."

	^ self associationAtTime: timeIndex ifAbsent: [self errorSubscriptBounds: timeIndex]