primitives
context: aContext primitiveSignalAtMicroseconds: receiver do: aBlock
	<simPrimitive: 242>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value