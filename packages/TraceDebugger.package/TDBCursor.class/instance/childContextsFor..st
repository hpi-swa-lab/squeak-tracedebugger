accessing
childContextsFor: aContext

	^ ((self traceFor: aContext) childrenForFilter: self contextFilter)
		collect: [:trace | trace contextAtTime: self timeIndex]
		as: Array