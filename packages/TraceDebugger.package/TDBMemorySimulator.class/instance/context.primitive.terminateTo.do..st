primitives
context: aContext primitive: receiver terminateTo: previousContext do: aBlock
	<simPrimitive: 196>
	<tdbRequiredIf: #wantsToControlWrites>

	^ self context: aContext primitiveFailTokenFor: nil "use image implementation"