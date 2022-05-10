primitives
context: aContext primitiveInteger: receiver at: anInteger do: aBlock
	<simPrimitive: 165>
	<tdbRequiredIf: #wantsToControlReads>

	^ self context: aContext primitive: receiver at: anInteger do: aBlock