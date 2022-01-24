private
doStepBackward: aBlock

	^ self doStep:
		[self assert: self canStepBackward.
		aBlock value]