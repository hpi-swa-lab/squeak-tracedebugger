primitives
context: aContext primitive: aString compareWith: anotherString collated: collation do: aBlock
	<simPrimitive: 158>
	<tdbRequiredIf: #wantsToControlReads>

	self flag: #optimize.
	^ self context: aContext primitiveFailTokenFor: nil "use image implementation"