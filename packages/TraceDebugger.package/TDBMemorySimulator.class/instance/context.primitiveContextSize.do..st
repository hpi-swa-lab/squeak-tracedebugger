primitives
context: aContext primitiveContextSize: receiver do: aBlock
	<simPrimitive: 212>
	<tdbRequiredIf: #wantsToControlReads>

	self
		context: aContext
		simulatedObject: receiver
		instVarAt: 3 "stackp"
		ifHit: [:size | ^ aContext push: size].
	
	^ aBlock value