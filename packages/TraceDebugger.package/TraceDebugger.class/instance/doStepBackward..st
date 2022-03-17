private - stepping
doStepBackward: aBlock

	^ self doStep:
		[self canStepBackward ifFalse: [^ self changed: #flash].
		aBlock value]