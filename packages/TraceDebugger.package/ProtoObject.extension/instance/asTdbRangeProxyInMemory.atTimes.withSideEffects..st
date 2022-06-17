*TraceDebugger-Core-proxies-converting
asTdbRangeProxyInMemory: aMemory atTimes: timeIndices withSideEffects: sideEffects
	"Double dispatch from TDBMemory."

	^ TDBRangeProxy
		for: self
		inMemory: aMemory
		atTimes: timeIndices
		withSideEffects: sideEffects