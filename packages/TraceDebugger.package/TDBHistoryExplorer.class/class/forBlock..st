instance creation
forBlock: aBlock

	| result |
	^ self
		forCursor: (self cursorClass traceForBlock: [result := aBlock value])
		object: result