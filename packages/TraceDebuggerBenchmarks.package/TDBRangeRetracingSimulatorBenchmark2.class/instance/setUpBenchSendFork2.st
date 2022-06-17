benchmarks
setUpBenchSendFork2

	simulator timeIndices: (0 to: 2).
	memory object: object priorTo: 2 instVarAt: 1 put: 2.0.
	memory object: object priorTo: 3 instVarAt: 1 put: 3 / 2.