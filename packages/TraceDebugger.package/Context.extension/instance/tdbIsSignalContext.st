*TraceDebugger-Core-accessing
tdbIsSignalContext

	^ self methodClass tdbIsExceptionClass and: [self selector = #signal]