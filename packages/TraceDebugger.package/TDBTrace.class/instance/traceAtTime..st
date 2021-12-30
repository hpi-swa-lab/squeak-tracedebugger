accessing
traceAtTime: timeIndex

	^ self
		traceAtTime: timeIndex
		ifAbsent: [self]