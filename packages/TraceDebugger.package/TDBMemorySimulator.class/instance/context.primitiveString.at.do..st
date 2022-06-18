primitives
context: aContext primitiveString: receiver at: anInteger do: aBlock
	<simPrimitive: 63>
	<tdbRequiredIf: #wantsToControlReads>

	^ self context: aContext primitive: receiver at: anInteger do: aBlock