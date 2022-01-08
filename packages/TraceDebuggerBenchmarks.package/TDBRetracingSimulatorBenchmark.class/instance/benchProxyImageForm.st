benchmarks
benchProxyImageForm

	| morph bounds fullBounds |
	self prepare:
		[morph := WatchMorph new.
		bounds := morph bounds asTdbProxyInMemory: memory atTime: 0.
		fullBounds := morph fullBounds asTdbProxyInMemory: memory atTime: 0.
		morph privateBounds: bounds.
		morph privateFullBounds: fullBounds].
	
	100 timesRepeat: [
		morph step.
		morph imageForm].