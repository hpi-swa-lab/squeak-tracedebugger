benchmarks
verifyBenchReceiverVariableFork0: result

	self flag: #gc.
	^ result coalesceEqually values = #(2)