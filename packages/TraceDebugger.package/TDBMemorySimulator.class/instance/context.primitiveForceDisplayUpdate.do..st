primitives
context: aContext primitiveForceDisplayUpdate: receiver do: aBlock
	<simPrimitive: 231>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value