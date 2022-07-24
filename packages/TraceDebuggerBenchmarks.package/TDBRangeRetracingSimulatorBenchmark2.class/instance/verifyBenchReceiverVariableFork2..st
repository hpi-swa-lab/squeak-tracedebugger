benchmarks
verifyBenchReceiverVariableFork2: result

	self flag: #rangeRetracingGC.
	^ result coalesceEqually values = #(2)