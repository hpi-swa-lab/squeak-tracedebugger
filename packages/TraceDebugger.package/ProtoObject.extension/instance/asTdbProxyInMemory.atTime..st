*TraceDebugger-Core-proxies-converting
asTdbProxyInMemory: aMemory atTime: timeIndex
	"Double dispatch from TDBMemory."

	^ TDBProxy for: self inMemory: aMemory atTime: timeIndex