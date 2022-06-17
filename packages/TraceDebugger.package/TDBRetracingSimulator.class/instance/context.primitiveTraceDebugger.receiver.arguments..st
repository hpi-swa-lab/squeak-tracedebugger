primitives
context: aContext primitiveTraceDebugger: primitiveName receiver: receiver arguments: arguments
	"Handle primitive invocations to the #TraceDebugger module, which servers diagnostics/debugging purposes."

	^ primitiveName
		caseOf:
			{[#primitiveRetracingTimeIndex] -> [self contextPushRetracingTimeIndex: aContext].
			[#primitiveRetracingForceFork] -> [self contextForceRetracingFork: aContext arguments: arguments]}
		otherwise:
			[super context: aContext primitiveTraceDebugger: primitiveName receiver: receiver arguments: arguments]