accessing - views
object: anObject atTimes: timeIndices withSideEffects: sideEffects
	"Answer a transparent view (TDBRangeProxy) on anObject at the specified time range, initialized with the specified sideEffects. Note that further messages sent to the proxy will be isolated from the rest image, and if their result depends on the point in time, a TDBRetracingFrayOut error may be signaled."

	timeIndices first >= 0
		ifFalse: [^ self error: 'all timeIndices must be positive'].
	(UseProxiesAlways not
		and: [(self includesObject: anObject) not]
		and: [(sideEffects includesObject: anObject) no])
			ifTrue: [^ anObject].
	
	self flag: #optimize. "If anObject is not registered in the receiver, or if timeIndex is not in the past, we could answer anObject itself. However, always answering a proxy gives us an excellent opportunity for crash-testing proxies as often as possible."
	
	^ anObject
		asTdbRangeProxyInMemory: self
		atTimes: timeIndices
		withSideEffects: sideEffects