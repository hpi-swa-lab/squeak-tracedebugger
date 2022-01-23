accessing
basicBenchmarkSelectors

	^ (self selectors
		select: [:ea | self isBenchmarkSelector: ea])
		sorted