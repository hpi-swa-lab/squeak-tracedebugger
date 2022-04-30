accessing
atTime: timeIndex

	^ self atTime: timeIndex ifAbsent: [self errorKeyNotFound: timeIndex]