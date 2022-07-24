benchmarks
verifyBenchJumpFork0: result

	self flag: #rangeRetracingGC.
	^ result coalesceEqually values = #(true)