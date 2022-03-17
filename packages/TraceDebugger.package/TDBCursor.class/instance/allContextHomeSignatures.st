enumerating contexts
allContextHomeSignatures

	| signatures |
	signatures := Set new.
	self rootTrace withAllDescendantsDo: [:trace |
		signatures add: (trace contextAtTime: self timeIndex) home tdbSignature].
	^ signatures