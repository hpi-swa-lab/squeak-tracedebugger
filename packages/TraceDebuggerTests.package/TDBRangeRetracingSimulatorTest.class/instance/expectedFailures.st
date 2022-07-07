failures
expectedFailures

	^ super expectedFailures ,
		{#testAutomaticCoalescion flag: #gc.
		#testForeignProxy "Nested range retracing is not possible because the outer simulator cannot distinguish between vectors and actual TDBMemorySlice instances created by the inner simulator"}