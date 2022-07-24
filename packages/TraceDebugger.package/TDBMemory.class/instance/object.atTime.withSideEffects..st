accessing - views
object: anObject atTime: timeIndex withSideEffects: sideEffects
	"Answer a transparent view (TDBProxy) on anObject at the specified time, initialized with the specified sideEffects. Note that further messages sent to the proxy will be isolated from the rest image."

	timeIndex >= 0
		ifFalse: [^ self error: 'timeIndex must be positive: ' , timeIndex].
	(UseProxiesAlways not and: [(self includesObject: anObject) not])
		ifTrue: [^ anObject].
	
	self flag: #optimize. "If anObject is not registered in the receiver, or if timeIndex is not in the past, we could answer anObject itself. However, always answering a proxy gives us an excellent opportunity for crash-testing proxies as often as possible."
	
	^ anObject
		asTdbProxyInMemory: self
		atTime: timeIndex
		withSideEffects: sideEffects