benchmarks
verifyBenchJumpFork1: result

	self flag: #gc.
	^ result coalesceEqually values = #(nil true)