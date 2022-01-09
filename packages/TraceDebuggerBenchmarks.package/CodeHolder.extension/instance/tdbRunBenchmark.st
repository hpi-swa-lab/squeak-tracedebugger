*TraceDebuggerBenchmarks-menus
tdbRunBenchmark

	self tdbSelectedBenchmark
		ifNotNil: [:benchmark | benchmark run explore].