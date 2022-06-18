benchmarks
verifyBenchSIMDPrimitiveFail: result

	^ result values = ((0 to: 3) collect: [:ea | 2 tryPrimitive: 10 withArgs: {ea}])