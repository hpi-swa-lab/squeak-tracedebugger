accessing
childContextsFor: aContext

	^ (self rootTrace detectTraceFor: aContext atTime: self timeIndex) children
		collect: [:trace | trace contextAtTime: self timeIndex]