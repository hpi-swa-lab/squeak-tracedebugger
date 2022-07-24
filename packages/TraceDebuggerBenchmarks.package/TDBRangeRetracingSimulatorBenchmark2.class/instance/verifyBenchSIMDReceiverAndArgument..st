benchmarks
verifyBenchSIMDReceiverAndArgument: result

	self flag: #rangeRetracingGC.
	^ result coalesceEqually values = #(0 1 4 9)