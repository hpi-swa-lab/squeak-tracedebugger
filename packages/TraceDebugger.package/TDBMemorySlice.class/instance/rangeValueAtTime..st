accessing
rangeValueAtTime: timeIndex
	"Answer the value for the range that the requested timeIndex belongs to. The value may be a transparent view (TDBRangeProxy)."

	^ self
		rangeValueAtTime: timeIndex
		ifAbsent: [self errorSubscriptBounds: timeIndex]