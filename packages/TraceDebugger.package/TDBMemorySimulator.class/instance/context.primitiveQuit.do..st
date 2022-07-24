primitives
context: aContext primitiveQuit: receiver do: aBlock
	<simPrimitive: 113>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value