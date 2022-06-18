primitives
context: aContext primitive: receiver slotAt: anInteger put: value do: aBlock
	<simPrimitive: 174>
	<tdbRequiredIf: #wantsToControlWrites>

	^ self context: aContext primitive: receiver instVarAt: anInteger put: value do: aBlock