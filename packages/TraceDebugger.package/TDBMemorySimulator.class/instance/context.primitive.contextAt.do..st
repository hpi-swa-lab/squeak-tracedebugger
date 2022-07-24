primitives
context: aContext primitive: receiver contextAt: anInteger do: aBlock
	<simPrimitive: 210>
	<tdbRequiredIf: #wantsToControlReads>

	^ self context: aContext primitive: receiver at: anInteger do: aBlock