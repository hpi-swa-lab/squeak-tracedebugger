stepping
doSelect: aContext
	"Bring aContext into the view of the receiver by moving the time index if necessary."

	| maxTime minTime |
	(self context tdbIdentical: aContext)
		ifTrue:
			[self flag: #coroutines. "Not only an optimization but also critical for contexts that belong to multiple traces."
			^ self context].
	(self timeIndex
		between: (minTime := self minTimeIndexFor: aContext)
		and: (maxTime := self maxTimeIndexFor: aContext))
			ifTrue: [^ self object: aContext].
	
	(self object: aContext atTime: self maxTimeIndex) isDead
		ifFalse: [self
			timeIndex: maxTime;
			stepBackToSendOrReturn]
		ifTrue: [self
			timeIndex: minTime;
			stepToSendOrReturn].
	
	^ self object: aContext