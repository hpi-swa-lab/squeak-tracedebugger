primitives
context: aContext primitiveString: receiver at: anInteger put: value do: aBlock
	<simPrimitive: 64>
	<tdbRequiredIf: #wantsToControlWrites>

	^ self context: aContext primitive: receiver at: anInteger put: value do: aBlock