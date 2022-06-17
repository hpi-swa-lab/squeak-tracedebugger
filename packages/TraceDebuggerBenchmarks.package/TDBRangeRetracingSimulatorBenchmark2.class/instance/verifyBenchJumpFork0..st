benchmarks
verifyBenchJumpFork0: result

	self flag: #gc.
	^ result coalesceEqually values = #(true)