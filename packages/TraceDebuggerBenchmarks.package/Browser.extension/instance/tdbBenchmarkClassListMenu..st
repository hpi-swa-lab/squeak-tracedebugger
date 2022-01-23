*TraceDebuggerBenchmarks-menus
tdbBenchmarkClassListMenu: aMenu
	<classListMenu>
	self tdbHasBenchmarkClassSelected ifFalse: [^ aMenu].
	^ aMenu addList: #(
		-
		('run all benchmarks' tdbRunBenchmarks));
		yourself