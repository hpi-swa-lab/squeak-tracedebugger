stepping
doStepInto: aContext
	"Step forward from aContext to the next direct or indirect sendOrReturn, or to its sender if no further sendOrReturn exists."

	^ self doStepForward:
		[((self context tdbIdentical: aContext)
			ifTrue: [self step]
			ifFalse:
				[self flag: #todo. "Discuss this behavior. Maybe just #doSelect: here?"
				self completeStep: (self basicCalleeOf: aContext) "just like stepOver:"])
					ifNotNil: [self stepToSendOrReturn]]