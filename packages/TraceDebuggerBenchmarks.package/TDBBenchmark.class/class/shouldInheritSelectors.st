testing
shouldInheritSelectors

	^ self superclass isAbstract
		or: [self basicBenchmarkSelectors isEmpty]