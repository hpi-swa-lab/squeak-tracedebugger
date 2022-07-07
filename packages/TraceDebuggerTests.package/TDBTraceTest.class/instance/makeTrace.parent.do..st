support
makeTrace: spec parent: parent do: aBlock

	| method context trace |
	method := CompiledMethod toReturnSelf
		selector: spec first;
		yourself.
	context := (Context newForMethod: method)
		privRefreshWith: method;
		yourself.
	trace := parent
		ifNil: [self classUnderTest forContext: context]
		ifNotNil:
			[self classUnderTest
				forContext: context
				parent: parent
				timeIndex: spec second].
	aBlock value: trace.
	spec at: 4 ifPresent: [:childSpecs |
		childSpecs do: [:childSpec |
			self makeTrace: childSpec parent: trace do: [:childTrace |
				trace atTime: childTrace minTimeIndex putChild: childTrace]]].
	trace advancedTo: context atTime: spec third.
	^ trace