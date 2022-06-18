*TraceDebugger-Core-retracing
tdbRetracingTimeIndex
	"Answer the time index of the active retracing executor, if any. During range retracing, this will push a vector on the stack."
	<primitive: #primitiveRetracingTimeIndex module: #TraceDebugger error: errorCode>

	^ self primitiveFailed