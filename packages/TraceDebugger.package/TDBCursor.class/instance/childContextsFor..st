accessing
childContextsFor: aContext
	"Answer all visible contexts that have been called by aContext. For non-matching children, enumerate all their nested visible children to 'flatten out' filtered contexts from the tree."

	^ ((self traceFor: aContext) childrenForFilter: self contextFilter)
		collect: [:trace | trace contextAtTime: self timeIndex]
		as: Array