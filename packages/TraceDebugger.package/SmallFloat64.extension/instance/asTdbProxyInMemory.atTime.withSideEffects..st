*TraceDebugger-Core-proxies-converting
asTdbProxyInMemory: aMemory atTime: timeIndex withSideEffects: sideEffects

	^ (super asTdbProxyInMemory: aMemory atTime: timeIndex withSideEffects: sideEffects)
		shallowCopy
			tdbproxyYourself