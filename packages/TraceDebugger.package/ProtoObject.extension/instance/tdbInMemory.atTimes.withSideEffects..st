*TraceDebugger-Core-proxies-converting
tdbInMemory: aMemory atTimes: timeIndices withSideEffects: sideEffects

	^ aMemory
		object: self
		atTimes: timeIndices
		withSideEffects: sideEffects