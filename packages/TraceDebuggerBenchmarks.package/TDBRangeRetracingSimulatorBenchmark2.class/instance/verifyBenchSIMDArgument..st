benchmarks
verifyBenchSIMDArgument: result

	self flag: #rangeRetracingGC.
	^ result coalesceEqually values = #(0 2 4 6)