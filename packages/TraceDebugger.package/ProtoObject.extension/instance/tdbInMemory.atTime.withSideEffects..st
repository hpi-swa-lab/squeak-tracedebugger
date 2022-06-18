*TraceDebugger-Core-proxies-converting
tdbInMemory: aMemory atTime: timeIndex withSideEffects: sideEffects

	^ aMemory
		object: self
		atTime: timeIndex
		withSideEffects: sideEffects