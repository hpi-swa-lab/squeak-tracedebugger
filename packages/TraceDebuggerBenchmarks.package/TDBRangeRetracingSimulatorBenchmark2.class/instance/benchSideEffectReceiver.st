benchmarks
benchSideEffectReceiver

	simulator timeIndices: (1 to: 2).
	^ simulator evaluate:
		[({{0. 0}. {0. 0. 0}} at: thisContext tdbRetracingTimeIndex)
			at: 1 put: 1]