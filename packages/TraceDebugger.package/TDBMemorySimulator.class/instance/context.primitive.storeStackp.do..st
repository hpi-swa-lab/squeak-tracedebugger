primitives
context: aContext primitive: receiver storeStackp: value do: aBlock
	<simPrimitive: 76>
	<tdbRequiredIf: #wantsToControlWrites>

	(self
		context: aContext
		simulatedObject: receiver
		instVarAt: 3 "stackp"
		tryPut: value)
			ifTrue: [^ aContext push: value].
	
	^ aBlock value