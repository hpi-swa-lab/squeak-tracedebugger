stepping
doStepOver: aContext

	self doStepForward:
		[(self context tdbIdentical: aContext)
			ifFalse: [self completeStep: (self calleeOf: aContext)]
			ifTrue:
				[self step.
				(self context tdbIdentical: aContext)
					ifFalse: [self completeStep: self context]].
		self stepToSendOrReturn].