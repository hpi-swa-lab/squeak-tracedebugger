accessing
childContextsFor: aContext

	^ (self traceFor: aContext) children
		collect: [:trace | trace contextAtTime: self timeIndex]
		as: Array