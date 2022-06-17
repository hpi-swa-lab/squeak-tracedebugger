*TraceDebugger-Core-proxies-converting
asTdbRangeProxyInMemory: aMemory atTimes: timeIndices withSideEffects: sideEffects

	^ (super asTdbRangeProxyInMemory: aMemory atTimes: timeIndices withSideEffects: sideEffects)
		shallowCopy
			tdbproxyYourself