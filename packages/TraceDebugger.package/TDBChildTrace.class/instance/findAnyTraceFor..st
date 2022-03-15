private
findAnyTraceFor: aContext

	^ (super findAnyTraceFor: aContext)
		ifNil: [self parent findAnyTraceFor: aContext]