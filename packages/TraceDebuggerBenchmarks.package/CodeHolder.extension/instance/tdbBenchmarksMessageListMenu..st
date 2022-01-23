*TraceDebuggerBenchmarks-menus
tdbBenchmarksMessageListMenu: aMenu
	<messageListMenu>
	(self selectedClass isTdbBenchmarkClass
		and: [self selectedClass isAbstract not
		and: [self selectedClass benchmarkSelectors includes: self selectedMessageName]])
			ifFalse: [^ aMenu].
	^ aMenu addList: #(
		-
		('run benchmark'		tdbRunBenchmark)
		('debug benchmark'	tdbDebugBenchmark));
		yourself