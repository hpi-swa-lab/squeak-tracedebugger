primitives
context: aContext primitiveSnapshot: receiver do: aBlock
	<simPrimitive: 97>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value