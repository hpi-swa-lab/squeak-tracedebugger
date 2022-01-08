private
performBenchmark

	hasRun := false.
	totalTime := nil.
	preparationTime := Duration zero.
	postparationTime := Duration zero.
	[self perform: selector.
	hasRun := true]
		valueAndStoreTimeToRunWithoutGC: [:duration |
			totalTime := duration.
			timeToRun := totalTime - preparationTime - postparationTime].