stepping
doStepInto: aContext
	"Step forward from aContext to the next direct or indirect sendOrReturn, or to its sender if no further sendOrReturn exists."

	^ self doStepForward:
		[((self context tdbIdentical: aContext)
			ifTrue: [self step]
			ifFalse:
				["Differently than in the normal debugger, we do not perform an unexpected and expensive stepOver here but just select the calleee."
				self doSelect: (self basicCalleeOf: aContext)])
					ifNotNil: [self stepToSendOrReturn]]