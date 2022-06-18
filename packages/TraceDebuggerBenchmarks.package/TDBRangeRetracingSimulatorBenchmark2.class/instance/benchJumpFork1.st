benchmarks
benchJumpFork1

	^ simulator evaluate: [thisContext tdbRetracingTimeIndex >= 2 ifTrue: [true]]