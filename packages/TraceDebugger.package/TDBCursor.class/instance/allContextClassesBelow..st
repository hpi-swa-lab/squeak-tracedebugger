enumerating contexts
allContextClassesBelow: aContext

	| signatures |
	signatures := Set new.
	(self traceFor: aContext) withAllDescendantsDo: [:trace |
		signatures add: (trace contextAtTime: self timeIndex) methodClass].
	^ signatures