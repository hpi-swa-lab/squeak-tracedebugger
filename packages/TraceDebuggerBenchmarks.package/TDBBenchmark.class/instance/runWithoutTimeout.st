running
runWithoutTimeout

	[self
		setUp;
		performBenchmark]
			ensure: [self tearDown].