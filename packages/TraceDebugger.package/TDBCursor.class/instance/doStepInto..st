stepping
doStepInto: aContext

	self doStepForward:
		[(self context tdbIdentical: aContext)
			ifTrue: [self step]
			ifFalse: [self completeStep: (self calleeOf: aContext) "just like stepOver:"].
		self stepToSendOrReturn].