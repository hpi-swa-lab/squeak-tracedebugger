primitives
context: aContext primitiveFindHandlerContext: receiver do: aBlock
	<simPrimitive: 197>
	<tdbRequiredIf: #wantsToControlReads>

	^ self context: aContext primitiveFailTokenFor: nil "use image implementation"