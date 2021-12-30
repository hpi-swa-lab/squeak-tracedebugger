instance creation
forSingleContext: aContext

	^ self on:
		(self traceClass forContext: aContext)