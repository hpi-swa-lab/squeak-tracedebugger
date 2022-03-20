*TraceDebugger-Core-accessing
tdbIsSignalerContext

	^ self methodClass tdbIsExceptionClass and: [self selector = #signal]