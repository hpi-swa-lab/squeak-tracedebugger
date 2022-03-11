*TraceDebugger-Core-proxies-converting
asTdbProxyInMemory: aMemory atTime: timeIndex

	^ ((self perform: #asTdbProxyInMemory:atTime: withArguments: {aMemory. timeIndex} inSuperclass: Object)
		perform: #shallowCopy withArguments: #() inSuperclass: Object)
			tdbproxyYourself