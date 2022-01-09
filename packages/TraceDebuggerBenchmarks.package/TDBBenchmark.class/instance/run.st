running
run

	[self
		timeout: [self setUp]
			after: self timeoutForSetUp;
		timeout: [self performBenchmark]
			after: self timeoutForBenchmark]
				ensure: [self tearDown].