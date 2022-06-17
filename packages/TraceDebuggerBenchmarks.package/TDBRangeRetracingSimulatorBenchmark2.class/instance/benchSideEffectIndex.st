benchmarks
benchSideEffectIndex

	simulator timeIndices: (1 to: 2).
	^ simulator evaluate:
		[{0. 0}
			at: thisContext tdbRetracingTimeIndex put: 1;
			yourself]