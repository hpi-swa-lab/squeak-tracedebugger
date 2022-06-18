*TraceDebugger-Core-proxies-converting
asTdbProxyInMemory: aMemory atTime: timeIndex withSideEffects: sideEffects
	"Double dispatch from TDBMemory."

	^ TDBProxy
		for: self
		inMemory: aMemory
		atTime: timeIndex
		withSideEffects: sideEffects