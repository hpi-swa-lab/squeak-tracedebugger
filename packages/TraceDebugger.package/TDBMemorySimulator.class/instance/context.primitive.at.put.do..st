primitives
context: aContext primitive: receiver at: anInteger put: value do: aBlock
	<simPrimitive: 61>
	<tdbRequiredIf: #wantsToControlWrites>

	(self
		context: aContext
		simulatedObject: receiver
		basicAt: anInteger
		tryPut: value)
			ifTrue: [^ aContext push: value].
	
	^ aBlock value