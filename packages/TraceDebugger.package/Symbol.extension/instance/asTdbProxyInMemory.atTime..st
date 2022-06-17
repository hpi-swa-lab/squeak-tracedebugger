*TraceDebugger-Core-proxies-converting
asTdbProxyInMemory: aMemory atTime: timeIndex
	"Use #shallowCopy from Object because Symbol>>#shallowCopy refuses to clone the receiver."

	^ ((self perform: #asTdbProxyInMemory:atTime: withArguments: {aMemory. timeIndex} inSuperclass: Object)
		perform: #shallowCopy withArguments: #() inSuperclass: Object)
			tdbproxyYourself