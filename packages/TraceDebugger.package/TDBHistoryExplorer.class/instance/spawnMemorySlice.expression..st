actions
spawnMemorySlice: aMemorySlice expression: aStringOrText

	^ (self spawnMemorySlice: aMemorySlice)
		setLabel: ('History of {1}' format: {aStringOrText});
		yourself