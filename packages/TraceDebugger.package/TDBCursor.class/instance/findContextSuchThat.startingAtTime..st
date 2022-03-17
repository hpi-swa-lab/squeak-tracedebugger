enumerating contexts
findContextSuchThat: aBlock startingAtTime: timeIndex

	| filter |
	filter := self contextFilter.
	self rootTrace withAllDescendantsDepthFirstDo: [:trace |
		trace minTimeIndex >= timeIndex ifTrue:
			[| context |
			context := trace contextAtTime: timeIndex.
			((filter ifNil: [true] ifNotNil: [filter value: context])
				and: [aBlock value: context]) ifTrue:
					[^ trace contextAtTime: self timeIndex]]].
	^ nil