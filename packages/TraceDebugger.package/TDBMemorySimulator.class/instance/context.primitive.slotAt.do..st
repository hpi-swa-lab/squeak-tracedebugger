primitives
context: aContext primitive: receiver slotAt: anInteger do: aBlock
	<simPrimitive: 173>
	<tdbRequiredIf: #wantsToControlReads>

	^ self context: aContext primitive: receiver instVarAt: anInteger do: aBlock