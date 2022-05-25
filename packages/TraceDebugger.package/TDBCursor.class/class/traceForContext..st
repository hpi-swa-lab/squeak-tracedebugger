instance creation
traceForContext: aContext

	^ (self forContext: aContext)
		doStepUntil: [false];
		timeIndex: 0;
		yourself