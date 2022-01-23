accessing
object: anObject atTime: timeIndex

	(UseProxiesAlways not and: [(self includesObject: anObject) not])
		ifTrue: [^ anObject].
	
	self flag: #optimize. "If anObject is not registered in the receiver, or if timeIndex is not in the past, we could answer anObject itself. However, always answering a proxy gives us an excellent opportunity for crash-testing proxies as often as possible."
	
	^ anObject asTdbProxyInMemory: self atTime: timeIndex