running
setUp

	super setUp.
	
	runner := BenchmarkRunner new.
	
	self class
		assert:
			([runner askQuestions] valueSupplyingAnswers:
				#(('*iterations*' 1)
				('*warmup*' 'No')
				('*GC*' 'No')
				('*' BenchmarkSuite)))
		description: 'failed to set up benchmark runner'.