*TraceDebuggerBenchmarks-menus
tdbSelectedBenchmark

	^ (self selectedClass ifNil: [^ nil])
		selector: (self selectedMessageName ifNil: [^ nil])