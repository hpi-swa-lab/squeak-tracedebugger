*TraceDebuggerBenchmarks-Base-menus
tdbRunBenchmarksCategory

	| benchmarks |
	benchmarks := ((systemOrganizer listAtCategoryNamed: self selectedSystemCategory)
		gather: [:each | self class environment at: each])
			select: [:each | each isTestClass and: [each isAbstract not]]
			thenCollect: [:each | each benchmarks].
	(benchmarks do: #run) inspect.