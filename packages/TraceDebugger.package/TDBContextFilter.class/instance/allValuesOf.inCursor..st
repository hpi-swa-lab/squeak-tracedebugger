accessing
allValuesOf: property inCursor: aCursor

	| selector |
	(self isMethodProperty: property) ifTrue:
		[| sampleContexts values |
		"Optimization. Especially in large traces, each method belongs to >20 contexts by average."
		sampleContexts := IdentityDictionary new.
		aCursor allContextsDo: [:context | 
			sampleContexts at: context method ifAbsentPut: [context]].
		values := Set new.
		sampleContexts do: [:context |
			values add: (self getProperty: property for: context)].
		^ values].
	
	selector := self getSelectorForProperty: property.
	^ aCursor allContextsGather: [:context | self perform: selector with: context]