primitives
context: aContext primitive: receiver copyObject: anObject do: aBlock
	<simPrimitive: 168>
	<tdbRequiredIf: #wantsToControlReads>

	self flag: #optimize.
	^ self context: aContext primitiveFailTokenFor: nil "use image implementation" "use image implementation"