primitives
context: aContext primitiveInputSemaphore: receiver do: aBlock
	<simPrimitive: 93>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value