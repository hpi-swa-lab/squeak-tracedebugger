extensions
returnValueFor: aContext ifPresent: aBlock

	| latestTime contextAfterReturn |
	(thisContext objectClass: aContext) isTdbProxyClass ifTrue:
		[^ self returnValueFor: aContext tdbproxyYourself ifPresent: aBlock].
	aContext isDead ifFalse: [^ nil].
	
	latestTime := self maxTimeIndexFor: aContext.
	contextAfterReturn := (self rootTrace
		traceAtTime: latestTime + 1 ifAbsent: [^ nil])
			contextAtTime: latestTime.
	^ aBlock value: contextAfterReturn top