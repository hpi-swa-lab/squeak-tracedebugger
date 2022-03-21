*TraceDebugger-UI-accessing
tdbIsUnhandledSignalContext

	^ self tdbIsSignalContext and: [self receiver "exception" isKindOf: UnhandledError]