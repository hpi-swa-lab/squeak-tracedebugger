*TraceDebuggerBenchmarks-Base-menus
tdbRunBenchmark

	self tdbSelectedBenchmark
		ifNotNil: [:benchmark | benchmark run explore].