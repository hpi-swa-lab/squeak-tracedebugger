primitives
context: aContext primitiveScanCharacters: receiver method: aCompiledMethod withArgs: arguments do: aBlock
	<simRawPrimitive: 103>
	<tdbRequiredIf: #wantsToControlReads>

	self shouldIsolate ifTrue:
		[self flag: #optimize.
		^ self context: aContext primitiveFailTokenFor: nil "use image implementation"].
	
	^ aBlock value