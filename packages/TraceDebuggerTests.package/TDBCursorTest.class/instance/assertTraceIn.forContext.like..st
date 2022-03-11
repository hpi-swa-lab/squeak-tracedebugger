asserting
assertTraceIn: aCursor forContext: aContext like: spec

	| selectorSpec children maxTime minTime |
	selectorSpec := spec first.
	minTime := spec second.
	maxTime := spec third.
	children := spec at: 4 ifAbsent: [].
	
	self assert: aContext tdbTestSelectorSpec = selectorSpec.
	self assert: minTime equals: (aCursor minTimeIndexFor: aContext).
	self assert: maxTime equals: (aCursor maxTimeIndexFor: aContext).
	
	children ifNotNil:
		[(aCursor childContextsFor: aContext) with: children do: [:childContext :childSpec |
			self assertTraceIn: aCursor forContext: childContext like: childSpec]].