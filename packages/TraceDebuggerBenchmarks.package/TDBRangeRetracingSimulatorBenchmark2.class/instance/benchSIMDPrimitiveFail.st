benchmarks
benchSIMDPrimitiveFail

	^ simulator evaluate: [2 tryPrimitive: 10 "primitiveDivide" withArgs: {thisContext tdbRetracingTimeIndex}]