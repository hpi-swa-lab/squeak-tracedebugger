private
performBenchmark
 
	result := #running.
	totalTime := nil.
	preparationTime := Duration zero.
	postparationTime := Duration zero.
	[[self perform: selector.
	result := #completed]
		valueAndStoreTimeToRunWithoutGC: [:duration |
			totalTime := duration.
			timeToRun := totalTime - preparationTime - postparationTime]]
				on: Error, Warning, Halt
				do: [:ex | result := ex].