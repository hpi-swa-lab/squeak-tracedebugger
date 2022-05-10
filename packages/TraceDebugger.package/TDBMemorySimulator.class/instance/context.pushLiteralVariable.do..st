instruction processing
context: aContext pushLiteralVariable: anObject do: aBlock
	<tdbRequiredIf: #wantsToControlReads>

	self
		context: aContext
		simulatedObject: anObject
		instVarAt: self valueIndex
		ifHit: [:value | ^ aContext push: value].
	
	^ super context: aContext pushLiteralVariable: anObject do: aBlock