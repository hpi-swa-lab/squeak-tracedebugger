accessing
timeoutForBenchmark

	| factor |
	timeout ifNotNil: [^ timeout * 5 "for historic benchmarking"].
	factor := (self method pragmaAt: #timeoutFactor:)
		ifNotNil: [:tag | tag arguments first]
		ifNil: [1].
	^ self defaultTimeout * factor * 5 "for historic benchmarking"