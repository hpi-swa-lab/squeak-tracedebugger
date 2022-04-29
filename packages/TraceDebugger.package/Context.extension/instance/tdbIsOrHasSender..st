*TraceDebugger-Core-testing
tdbIsOrHasSender: aContext

	^ (self tdbIdentical: aContext) or: [self hasSender: aContext tdbproxyYourself]