benchmarks
benchProxyImageForm
	"Benchmark an operation that includes many sends to a TDBProxy (and thus many invocations of the retracing simulator)."

	| morph bounds fullBounds |
	self prepare:
		[morph := WatchMorph new.
		bounds := morph bounds asTdbProxyInMemory: memory atTime: 0.
		fullBounds := morph fullBounds asTdbProxyInMemory: memory atTime: 0.
		morph privateBounds: bounds.
		morph privateFullBounds: fullBounds].
	
	500 timesRepeat:
		[morph step.
		morph imageForm].