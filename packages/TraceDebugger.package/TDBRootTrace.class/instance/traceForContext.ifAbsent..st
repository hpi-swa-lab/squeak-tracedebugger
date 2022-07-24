accessing
traceForContext: aContext ifAbsent: absentBlock

	^ tracesForContexts
		at: aContext
		ifAbsent: absentBlock