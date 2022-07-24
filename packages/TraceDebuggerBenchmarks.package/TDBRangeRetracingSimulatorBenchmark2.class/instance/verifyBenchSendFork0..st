benchmarks
verifyBenchSendFork0: result

	self flag: #gc.
	^ result coalesceEqually pointValues = #(true false false false)