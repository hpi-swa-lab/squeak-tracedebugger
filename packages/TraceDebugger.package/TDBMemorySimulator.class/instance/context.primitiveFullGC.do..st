primitives
context: aContext primitiveFullGC: receiver do: aBlock
	<simPrimitive: 130>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value