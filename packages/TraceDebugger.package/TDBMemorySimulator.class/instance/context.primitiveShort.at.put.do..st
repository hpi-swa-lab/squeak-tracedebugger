primitives
context: aContext primitiveShort: receiver at: anInteger put: value do: aBlock
	<simPrimitive: 144>
	<tdbRequiredIf: #wantsToControlWrites>

	^ self context: aContext primitive: receiver at: anInteger put: value do: aBlock