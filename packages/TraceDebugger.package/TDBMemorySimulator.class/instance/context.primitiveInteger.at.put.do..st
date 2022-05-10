primitives
context: aContext primitiveInteger: receiver at: anInteger put: value do: aBlock
	<simPrimitive: 166>
	<tdbRequiredIf: #wantsToControlWrites>

	^ self context: aContext primitive: receiver at: anInteger put: value do: aBlock