primitives
context: aContext primitive: receiver instVarAt: anInteger do: aBlock
	<simPrimitive: 73>
	<tdbRequiredIf: #wantsToControlReads>

	self
		context: aContext
		simulatedObject: receiver
		instVarAt: anInteger
		ifHit: [:value | ^ aContext push: value].
	
	^ aBlock value