failures
expectedFailures

	^ super expectedFailures ,
		{#testAutomaticCoalescion flag: #rangeRetracingGC}