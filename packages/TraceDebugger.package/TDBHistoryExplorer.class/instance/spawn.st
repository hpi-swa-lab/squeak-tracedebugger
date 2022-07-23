actions
spawn

	^ self
		spawnMemorySlice: (self memorySlice collect: [:ea | ea errorOrResult])
		expression: self expression