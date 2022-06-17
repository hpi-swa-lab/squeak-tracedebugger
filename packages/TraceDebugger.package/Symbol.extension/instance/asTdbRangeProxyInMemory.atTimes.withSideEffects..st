*TraceDebugger-Core-proxies-converting
asTdbRangeProxyInMemory: aMemory atTimes: timeIndices withSideEffects: sideEffects
	"Use #shallowCopy from Object because Symbol>>#shallowCopy refuses to clone the receiver."

	^ ((self perform: #asTdbRangeProxyInMemory:atTimes:withSideEffects: withArguments: {aMemory. timeIndices. sideEffects} inSuperclass: Object)
		perform: #shallowCopy withArguments: #() inSuperclass: Object)
			tdbproxyYourself