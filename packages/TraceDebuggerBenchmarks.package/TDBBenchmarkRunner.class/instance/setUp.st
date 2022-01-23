running
setUp

	super setUp.
	
	benchmarks := self benchmarkClass allBenchmarks.
	self timeout: self defaultTimeout +
		(benchmarks detectSum: [:ea | (ea timeoutForSetUp + ea timeoutForBenchmark) asSeconds]).