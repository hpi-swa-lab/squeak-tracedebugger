benchmarks
verifyBenchReceiverVariableFork0: result

	self flag: #rangeRetracingGC.
	^ result coalesceEqually values = #(2)