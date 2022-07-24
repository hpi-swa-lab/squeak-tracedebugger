*TraceDebuggerBenchmarks-Base-menus
tdbBenchmarkSystemCategoryMenu: aMenu
	<systemCategoryMenu>
	self tdbHasSystemCategoryWithBenchmarksSelected ifFalse: [^ aMenu].
	^ aMenu addList: #(
		-
		('run all benchmarks' tdbRunBenchmarksCategory));
		yourself