accessing - descendants
makeTreeSliceForTimes: timeIndices contractPaths: contractPaths

	^ self
		makeTreeSliceForTimeStream: timeIndices readStream
		contractPaths: contractPaths