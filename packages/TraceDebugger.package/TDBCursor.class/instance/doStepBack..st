stepping
doStepBack: aContext

	self flag: #optimize.
	
	self stepBack.
	self timeIndex <= 0 ifTrue: [^ self].
	self stepBackToSendOrReturn.
	(self context tdbIdentical: aContext) ifFalse: [
		self completeStepBack: (self calleeOf: aContext)].