stepping
doSelect: aContext
	"Bring aContext into the view of the receiver by moving the time index if necessary."

	| maxTime minTime |
	(self timeIndex
		between: (minTime := self minTimeIndexFor: aContext)
		and: (maxTime := self maxTimeIndexFor: aContext))
			ifTrue: [^ self object: aContext tdbproxyYourself].
	
	aContext tdbproxyYourself isDead
		ifFalse: [self
			timeIndex: maxTime;
			stepBackToSendOrReturn]
		ifTrue: [self
			timeIndex: minTime;
			stepToSendOrReturn].
	
	^ self object: aContext tdbproxyYourself