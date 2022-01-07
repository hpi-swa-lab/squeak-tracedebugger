private
doStepForward: aBlock

	^ self doStep:
		[self assert: self canStepForward.
		aBlock value]