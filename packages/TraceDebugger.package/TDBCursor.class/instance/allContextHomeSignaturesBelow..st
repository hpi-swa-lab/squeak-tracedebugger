enumerating contexts
allContextHomeSignaturesBelow: aContext

	| signatures |
	signatures := Set new.
	(self traceFor: aContext) withAllDescendantsDo: [:trace |
		signatures add: (trace contextAtTime: self timeIndex) home tdbSignature].
	^ signatures