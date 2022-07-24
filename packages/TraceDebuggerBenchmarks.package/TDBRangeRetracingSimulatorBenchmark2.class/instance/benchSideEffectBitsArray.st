benchmarks
benchSideEffectBitsArray

	^ simulator evaluate: [#[0] copy at: 1 put: thisContext tdbRetracingTimeIndex; yourself]