asserting
shouldntFail: aBlock

	^ self
		shouldnt: aBlock
		raise: Error, Warning, Halt