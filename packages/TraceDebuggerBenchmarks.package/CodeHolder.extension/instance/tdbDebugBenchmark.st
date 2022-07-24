*TraceDebuggerBenchmarks-Base-menus
tdbDebugBenchmark

	self tdbSelectedBenchmark
		ifNotNil: [:benchmark | benchmark debug].