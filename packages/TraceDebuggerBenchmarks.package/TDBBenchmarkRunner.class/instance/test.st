running
test

	self runBenchmarks.
	
	self exportResults.
	
	self
		assert: (self benchmarks allSatisfy: [:bench | (results at: bench) allSatisfy: [:result | result hasCompletedOrTimedOut]])
		description: ['Unsuccessful benchmarks: {1}' format: {self benchmarks
			select: [:bench | (results at: bench) anySatisfy: [:ea | ea hasCompletedOrTimedOut not]]}].