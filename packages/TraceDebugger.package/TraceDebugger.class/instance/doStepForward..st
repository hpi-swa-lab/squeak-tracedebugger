private - stepping
doStepForward: aBlock

	^ self doStep:
		[self canStepForward ifFalse: [^ self changed: #flash].
		aBlock value]