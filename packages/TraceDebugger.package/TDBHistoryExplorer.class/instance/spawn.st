actions
spawn

	^ self spawn: (self memorySlice collect: [:ea | ea errorOrResult])