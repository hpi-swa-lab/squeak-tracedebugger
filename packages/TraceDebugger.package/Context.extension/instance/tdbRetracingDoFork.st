*TraceDebugger-Core-retracing
tdbRetracingDoFork
	"Trigger a complete fork in the active range retracing executor, if any. This will destroy all vectors and might impair performance severely. Only to be used for testing/debugging."
	<primitive: #primitiveRetracingForceFork module: #TraceDebugger error: errorCode>

	^ self tdbRetracingDoFork: self tdbRetracingTimeIndex