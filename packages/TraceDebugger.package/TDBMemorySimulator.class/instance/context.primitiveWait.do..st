primitives
context: aContext primitiveWait: receiver do: aBlock
	<simPrimitive: 86>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value