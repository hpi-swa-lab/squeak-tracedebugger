primitives
context: aContext primitiveResume: receiver do: aBlock
	<simPrimitive: 87>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value