primitives
context: aContext primitiveFloat: receiver at: anInteger put: value do: aBlock
	<simPrimitive: 39>
	<simPrimitive: 239>
	<tdbRequiredIf: #wantsToControlWrites>

	^ self context: aContext primitive: receiver at: anInteger put: value do: aBlock