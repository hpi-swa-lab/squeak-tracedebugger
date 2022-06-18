*TraceDebugger-Core-proxies-converting
asTdbProxyInMemory: aMemory atTime: timeIndex

	self flag: #deprecate.
	^ self
		asTdbProxyInMemory: aMemory
		atTime: timeIndex
		withSideEffects: nil