primitives
context: aContext primitiveObject: receiver at: anInteger do: aBlock
	<simPrimitive: 68>
	<tdbRequiredIf: #wantsToControlReads>

	^ self context: aContext primitive: receiver at: anInteger do: aBlock