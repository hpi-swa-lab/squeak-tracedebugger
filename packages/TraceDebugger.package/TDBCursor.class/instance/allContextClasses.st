enumerating contexts
allContextClasses

	| signatures |
	signatures := Set new.
	self rootTrace withAllDescendantsDo: [:trace |
		signatures add: (trace contextAtTime: self timeIndex) methodClass].
	^ signatures