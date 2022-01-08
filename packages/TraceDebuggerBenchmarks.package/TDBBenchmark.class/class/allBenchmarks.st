accessing
allBenchmarks

	^ self withAllSubclasses gather: [:class | class benchmarks]