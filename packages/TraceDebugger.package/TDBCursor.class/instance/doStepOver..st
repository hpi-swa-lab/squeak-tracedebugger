stepping
doStepOver: aContext
	"Step forward to the next direct sendOrReturn of aContext, or to its sender if no further sendOrReturn exists."

	self doStepForward:
		[(self context tdbIdentical: aContext)
			ifFalse:
				[(self completeStep: (self basicCalleeOf: aContext))
					ifNil: [^ self]]
			ifTrue:
				[self step ifNil: [^ self].
				((self context tdbIdentical: aContext) not
					and: [aContext in: [:ctx | self context hasSender: ctx]])
						ifTrue: [self completeStep: self context]].
		self stepToSendOrReturn].