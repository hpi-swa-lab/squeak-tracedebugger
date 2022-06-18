primitives
context: aContext primitiveIncrementalGC: receiver do: aBlock
	<simPrimitive: 131>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value