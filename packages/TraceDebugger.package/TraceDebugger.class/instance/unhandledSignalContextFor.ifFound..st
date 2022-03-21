private
unhandledSignalContextFor: aContext ifFound: aBlock

	self cursor allContextsBelow: aContext do: [:context |
		context tdbIsUnhandledSignalContext ifTrue:
			[| signalContext |
			signalContext := (self cursor object: context atTime: (self cursor maxTimeIndexFor: context))
				receiver exception tdbSignalContext.
			(signalContext tdbIdentical: aContext) ifTrue:
				[^ aBlock value: context]]].
	^ nil