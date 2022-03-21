*TraceDebugger-Core-accessing
tdbSignalerContexts

	^ self tdbSignalContexts collect: [:ctx | ctx receiver "exception" signalerContext]