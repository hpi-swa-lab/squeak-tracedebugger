*TraceDebugger-Core-Support-range retracing
tdbRangeContextsStep

	| result |
	result := super step.
	result isTdbMemorySlice
		ifFalse: [^ self customize: result].
	^ (result rawGather: [:each | each])
		rawCollect: [:each | self customize: each]