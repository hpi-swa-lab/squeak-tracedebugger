enumerating
findContextSuchThat: aBlock startingAtTime: timeIndex

	self rootTrace withAllDescendantsDepthFirstDo: [:trace |
		trace minTimeIndex >= timeIndex ifTrue:
			[| context |
			context := trace contextAtTime: timeIndex.
			(aBlock value: context) ifTrue:
				[^ trace contextAtTime: self timeIndex]]].
	^ nil