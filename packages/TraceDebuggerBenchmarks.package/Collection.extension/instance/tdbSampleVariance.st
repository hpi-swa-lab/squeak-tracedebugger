*TraceDebuggerBenchmarks-math functions
tdbSampleVariance

	| avg |
	avg := self average.
	^ (self detectSum: [:ea | (ea - avg) squared]) / (self size - 1)