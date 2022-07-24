primitives
context: aContext primitiveLoadImageSegment: receiver do: aBlock
	<simPrimitive: 99>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value