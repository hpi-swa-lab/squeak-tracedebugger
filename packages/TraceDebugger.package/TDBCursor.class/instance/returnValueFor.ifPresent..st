extensions
returnValueFor: aContext ifPresent: aBlock

	| latestTime contextAfterReturn |
	(self object: aContext atTime: self maxTimeIndex) isDead ifFalse: [^ nil].
	
	latestTime := self maxTimeIndexFor: aContext.
	contextAfterReturn := (self rootTrace
		traceAtTime: latestTime + 1 ifAbsent: [^ nil])
			contextAtTime: latestTime.
	^ aBlock value: contextAfterReturn top