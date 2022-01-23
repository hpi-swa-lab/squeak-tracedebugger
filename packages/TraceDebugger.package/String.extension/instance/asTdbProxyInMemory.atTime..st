*TraceDebugger-Core-proxies-converting
asTdbProxyInMemory: aMemory atTime: timeIndex

	^ (super asTdbProxyInMemory: aMemory atTime: timeIndex) shallowCopy
		tdbproxyYourself