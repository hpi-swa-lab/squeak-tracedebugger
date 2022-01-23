accessing
benchmarkSelectors

	self isAbstract ifTrue: [^ #()].
	^ self shouldInheritSelectors
		ifFalse: [self basicBenchmarkSelectors]
		ifTrue: [(self withAllSuperclasses
			select: [:class | class includesBehavior: TDBBenchmark])
				gather: [:class | class basicBenchmarkSelectors]]