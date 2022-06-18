*TraceDebuggerBenchmarks-Base-math functions
tdbSampleVariance

	| avg |
	self isEmpty ifTrue: [^ self errorEmptyCollection].
	self size = 1 ifTrue: [^ self anyOne].
	
	avg := self average.
	^ (self detectSum: [:ea | (ea - avg) squared]) / (self size - 1)