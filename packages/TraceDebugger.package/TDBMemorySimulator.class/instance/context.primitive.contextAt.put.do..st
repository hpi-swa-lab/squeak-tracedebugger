primitives
context: aContext primitive: receiver contextAt: anInteger put: value do: aBlock
	<simPrimitive: 211>
	<tdbRequiredIf: #wantsToControlWrites>

	^ self context: aContext primitive: receiver at: anInteger put: value do: aBlock