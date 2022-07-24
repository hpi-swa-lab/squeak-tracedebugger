benchmarks
verifyBenchSendFork0: result

	self flag: #rangeRetracingGC.
	^ result coalesceEqually pointValues = #(true false false false)