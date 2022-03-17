private
findNearestTraceFor: aContext

	^ (super findNearestTraceFor: aContext)
		ifNil: [self parent findNearestTraceFor: aContext]