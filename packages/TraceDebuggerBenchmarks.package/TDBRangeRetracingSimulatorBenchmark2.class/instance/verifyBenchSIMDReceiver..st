benchmarks
verifyBenchSIMDReceiver: result

	self flag: #gc.
	^ result coalesceEqually values = #(0 2 4 6)