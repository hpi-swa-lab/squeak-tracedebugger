primitives
context: aContext primitive: receiver at: anInteger do: aBlock
	<simPrimitive: 60>
	<tdbRequiredIf: #wantsToControlReads>

	self
		context: aContext
		simulatedObject: receiver
		basicAt: anInteger
		ifHit: [:value | ^ aContext push: value].
	
	^ aBlock value