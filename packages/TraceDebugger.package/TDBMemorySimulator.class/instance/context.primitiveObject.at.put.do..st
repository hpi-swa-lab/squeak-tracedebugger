primitives
context: aContext primitiveObject: receiver at: anInteger put: value do: aBlock
	<simPrimitive: 69>
	<tdbRequiredIf: #wantsToControlWrites>

	^ self context: aContext primitive: receiver at: anInteger put: value do: aBlock