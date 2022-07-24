primitives
context: aContext primitiveStoreImageSegment: receiver do: aBlock
	<simPrimitive: 98>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value