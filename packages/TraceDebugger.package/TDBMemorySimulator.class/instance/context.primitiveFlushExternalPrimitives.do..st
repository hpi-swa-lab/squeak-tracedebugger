primitives
context: aContext primitiveFlushExternalPrimitives: receiver do: aBlock
	<simPrimitive: 570>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value