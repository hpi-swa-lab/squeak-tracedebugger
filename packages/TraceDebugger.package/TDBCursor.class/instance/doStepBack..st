stepping
doStepBack: aContext
	"Step backward to the previous direct sendOrReturn of aContext, or to its sender if no further sendOrReturn exists. This is the complement operation for #doStepOver:."

	self flag: #optimize.
	
	self stepBack.
	self timeIndex <= 0 ifTrue: [^ self].
	self stepBackToSendOrReturn.
	(self context tdbIdentical: aContext) ifFalse:
		[self completeStepBack: (self basicCalleeOf: aContext)].