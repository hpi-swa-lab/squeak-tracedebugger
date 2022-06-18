*TraceDebuggerBenchmarks-benchmarking-override
timedBenchmarkExecution: aSelector
	"Will do a timed execution of the benchmark and return the result timer"
	| timer result |
	timers := Dictionary new.

	timer := self createTimer: 'total'.
	
	timer start.
	1 to: innerLoopIterations do: [:ignored|
		result := suite perform: aSelector.
	].
	timer stop.

	timer allTimesModify: [:t | t / innerLoopIterations].
	suite process: aSelector result: result withTimer: timer.

	self recordResults: timer for: aSelector.
	
	^ timer