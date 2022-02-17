asserting
shouldFlash: aBlock

	| result |
	flashes removeAll.
	result := aBlock value.
	self assert: flashes notEmpty description: 'Should have flashed'.
	^ result