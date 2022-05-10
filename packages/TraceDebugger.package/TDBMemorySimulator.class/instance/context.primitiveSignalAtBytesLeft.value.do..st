primitives
context: aContext primitiveSignalAtBytesLeft: receiver value: value do: aBlock
	<simPrimitive: 125>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value