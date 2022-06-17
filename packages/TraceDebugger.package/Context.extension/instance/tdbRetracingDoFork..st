*TraceDebugger-Core-retracing
tdbRetracingDoFork: vector
	"Trigger a fork based on the given vector in the active range retracing executor, if any. This will destroy the vector and might impair performance severely. Only to be used for testing/debugging."
	<primitive: #primitiveRetracingForceFork module: #TraceDebugger error: errorCode>

	^ self primitiveFailed
	
	"(thisContext simulator isVector: vector) ifFalse: [^ vector].
	vector times do: [:times |
		times = self tdbRetracingTimeIndex ifTrue: [^ vector]]."