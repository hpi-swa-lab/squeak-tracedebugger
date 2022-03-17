asserting
shouldntRaise: aBlock

	^ self
		shouldnt: aBlock
		raise: Error, Warning, Halt