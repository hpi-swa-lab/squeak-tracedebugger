private
traceFor: aContext ifAbsent: absentBlock

	^ self rootTrace
		traceForContext: aContext
		ifAbsent: absentBlock