instruction processing
context: aContext pushReceiverVariable: offset do: aBlock
	<tdbRequiredIf: #wantsToControlReads>

	self
		context: aContext
		simulatedObject: aContext receiver
		instVarAt: offset + 1
		ifHit: [:value | ^ aContext push: value].
	
	^ super context: aContext pushReceiverVariable: offset do: aBlock