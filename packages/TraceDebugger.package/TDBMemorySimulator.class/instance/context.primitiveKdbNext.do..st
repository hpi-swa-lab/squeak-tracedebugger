primitives
context: aContext primitiveKdbNext: receiver do: aBlock
	<simPrimitive: 108>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value