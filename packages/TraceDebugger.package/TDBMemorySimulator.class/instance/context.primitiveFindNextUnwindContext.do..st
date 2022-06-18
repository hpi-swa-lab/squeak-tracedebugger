primitives
context: aContext primitiveFindNextUnwindContext: receiver do: aBlock
	<simPrimitive: 195>
	<tdbRequiredIf: #wantsToControlReads>

	^ self context: aContext primitiveFailTokenFor: nil "use image implementation"