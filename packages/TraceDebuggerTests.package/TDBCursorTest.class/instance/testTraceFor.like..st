running
testTraceFor: aContext like: spec

	^ self
		testTraceFor: aContext
		contextFilter: nil
		like: spec