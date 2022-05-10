primitives
context: aContext primitive: receiver instVarAt: anInteger put: value do: aBlock
	<simPrimitive: 74>
	<tdbRequiredIf: #wantsToControlWrites>

	(self
		context: aContext
		simulatedObject: receiver
		instVarAt: anInteger
		tryPut: value)
			ifTrue: [^ aContext push: value].
	
	^ aBlock value