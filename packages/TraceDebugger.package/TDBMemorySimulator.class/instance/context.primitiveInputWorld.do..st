primitives
context: aContext primitiveInputWorld: receiver do: aBlock
	<simPrimitive: 95>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value