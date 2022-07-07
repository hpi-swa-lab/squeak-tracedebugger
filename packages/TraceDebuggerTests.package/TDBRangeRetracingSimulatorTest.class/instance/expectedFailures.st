failures
expectedFailures

	^ super expectedFailures ,
		{#testAutomaticCoalescion flag: #gc}