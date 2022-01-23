*TraceDebugger-Core-proxies-converting
tdbInMemory: aMemory atTime: timeIndex

	(aMemory includesObject: self) ifFalse: [^ self]. "see #optimize comment in TDBMemory >> #object:atTime:"
	
	^ super tdbInMemory: aMemory atTime: timeIndex