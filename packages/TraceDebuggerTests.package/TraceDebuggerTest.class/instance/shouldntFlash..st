asserting
shouldntFlash: aBlock

	| result |
	flashes removeAll.
	result := aBlock value.
	self assert: flashes isEmpty description: 'Shouldn''t have flashed'.
	^ result