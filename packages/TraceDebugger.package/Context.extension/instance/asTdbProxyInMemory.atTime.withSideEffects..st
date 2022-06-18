*TraceDebugger-Core-proxies-converting
asTdbProxyInMemory: aMemory atTime: timeIndex withSideEffects: sideEffects

	^ TDBContextProxy
		for: self
		inMemory: aMemory
		atTime: timeIndex
		withSideEffects: sideEffects