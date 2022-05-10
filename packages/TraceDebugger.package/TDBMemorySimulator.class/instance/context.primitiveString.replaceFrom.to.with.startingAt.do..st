primitives
context: aContext primitiveString: receiver replaceFrom: start to: stop with: replacement startingAt: repStart do: aBlock
	<simPrimitive: 105>
	<tdbRequiredIf: #wantsToControlReads>
	<tdbRequiredIf: #wantsToControlWrites>

	self flag: #optimize.
	^ self context: aContext primitiveFailTokenFor: nil "use image implementation"