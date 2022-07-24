benchmarks
verifyBenchSIMDReceiverAndArgument: result

	self flag: #gc.
	^ result coalesceEqually values = #(0 1 4 9)