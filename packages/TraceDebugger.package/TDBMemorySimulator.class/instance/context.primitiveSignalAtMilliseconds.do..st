primitives
context: aContext primitiveSignalAtMilliseconds: receiver do: aBlock
	<simPrimitive: 136>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value