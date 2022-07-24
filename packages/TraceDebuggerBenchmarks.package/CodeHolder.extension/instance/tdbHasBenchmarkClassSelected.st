*TraceDebuggerBenchmarks-Base-menus
tdbHasBenchmarkClassSelected

	^ self selectedClass
		ifNil: [false]
		ifNotNil: [:cls |
			cls isTdbBenchmarkClass and: [cls isAbstract not]]