accessing
timeoutForBenchmark

	| factor |
	timeout ifNotNil: [^ timeout].
	factor := (self method pragmaAt: #timeoutFactor:)
		ifNotNil: [:tag | tag arguments first]
		ifNil: [1].
	^ self defaultTimeout * factor