stepping
doStepBack: aContext

	self flag: #optimize.
	
	self stepBack.
	self stepBackToSendOrReturn.
	(self context tdbIdentical: aContext) ifFalse: [
		self completeStepBack: (self calleeOf: aContext)].