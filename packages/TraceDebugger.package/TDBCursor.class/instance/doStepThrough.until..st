stepping
doStepThrough: aContext until: aBlock
	"Step through aContext until aBlock evaluates to other than false and answer a boolean indicating whether the block condition was met before the home context was terminated."

	self flag: #forLater. "Think about #doStepIntoUntil: and #doStepBackUntil:?"
	
	^ self doStepForward:
		[| home context value |
		home := (self livingHomeTraceFor: aContext) contextAtTime: self timeIndex.
		(((self livingHomeTraceFor: self context) contextAtTime: self timeIndex) tdbIdentical: home)
			ifFalse: [self doStepThrough: aContext].
		[(home := self object: home tdbproxyYourself) isDead not
			and: [((context := self context) tdbIdentical: home tdbproxyYourself) ==> [home willReturn not]]
			and: [(value := aBlock cull: context) == false]]
				whileTrue:
					[self doStepThrough: aContext].
		
		value]