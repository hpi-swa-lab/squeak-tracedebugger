benchmarks
verifyBenchJumpFork1: result

	self flag: #rangeRetracingGC.
	^ result coalesceEqually values = #(nil true)