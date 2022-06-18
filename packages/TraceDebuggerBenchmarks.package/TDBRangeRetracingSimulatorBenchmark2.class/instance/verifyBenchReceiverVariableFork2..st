benchmarks
verifyBenchReceiverVariableFork2: result

	self flag: #gc.
	^ result coalesceEqually values = #(2)