enumerating contexts
allContextsGather: aBlock

	| results |
	results := Set new.
	self allContextsDo: [:context |
		results add: (aBlock value: context)].
	^ results