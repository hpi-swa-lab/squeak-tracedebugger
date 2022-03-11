enumerating
allContextsDo: aBlock

	self rootTrace withAllDescendantsDo: [:trace |
		aBlock value: (trace contextAtTime: self timeIndex)].