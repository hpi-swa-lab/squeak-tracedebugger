*TraceDebuggerBenchmarks-Base-actions-pseudo-override
askQuestions

	| iterations |
	iterations := #(1 5 10),
					(20 to: 100 by: 10),
					(200 to: 1000 by: 100),
					(2000 to: 10000 by: 1000).
	numIterations := (UIManager default chooseFrom: iterations values: iterations title: 'How many iterations?').
	numIterations ifNil: [^ false].
	doWarmup := (UIManager default chooseOptionFrom: #(Yes No) values: #(true false) title: 'Should we do a warmup run?').
	doWarmup ifNil: [^ false].
	doGC := (UIManager default chooseOptionFrom: #(Yes No) values: #(true false) title: 'Should we force a full GC between each run?').
	doGC ifNil: [^ false].
	suiteClass := (UIManager default
		chooseFrom: (BenchmarkSuite withAllSubclasses collect: #name)
		values: BenchmarkSuite withAllSubclasses
		title: 'How should we run the benchmarks?').
	suiteClass ifNil: [^ false].
	^ true