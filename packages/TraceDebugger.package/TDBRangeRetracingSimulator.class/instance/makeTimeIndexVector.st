primitives
makeTimeIndexVector

	^ self memorySliceClass
		memory: self memory
		intervals: (self timeIndices collect: [:ea | (ea to: ea)])
		rawValues: self timeIndices