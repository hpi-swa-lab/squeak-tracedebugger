primitives
context: aContext primitiveShort: receiver at: anInteger do: aBlock
	<simPrimitive: 143>
	<tdbRequiredIf: #wantsToControlReads>

	^ self context: aContext primitive: receiver at: anInteger do: aBlock