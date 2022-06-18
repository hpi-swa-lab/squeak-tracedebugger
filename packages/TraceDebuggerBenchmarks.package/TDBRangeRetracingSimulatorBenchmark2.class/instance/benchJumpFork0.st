benchmarks
benchJumpFork0

	^ simulator evaluate: [thisContext tdbRetracingTimeIndex >= 0 ifTrue: [true]]