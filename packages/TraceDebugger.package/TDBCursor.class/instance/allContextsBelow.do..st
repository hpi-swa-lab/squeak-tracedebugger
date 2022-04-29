enumerating contexts
allContextsBelow: aContext do: aBlock
	"Evaluate aBlock for aContext and all other contexts that were eventually called by aContext."

	(aContext ifNil: [self rootTrace] ifNotNil: [self traceFor: aContext])
		withAllDescendantsDo: [:trace |
			aBlock value: (trace contextAtTime: self timeIndex)].