*TraceDebugger-Core-proxies-converting
asTdbProxyInMemory: aMemory atTime: timeIndex withSideEffects: sideEffects
	"Use #shallowCopy from Object because Symbol>>#shallowCopy refuses to clone the receiver."

	^ ((self perform: #asTdbProxyInMemory:atTime:withSideEffects: withArguments: {aMemory. timeIndex. sideEffects} inSuperclass: Object)
		perform: #shallowCopy withArguments: #() inSuperclass: Object)
			tdbproxyYourself