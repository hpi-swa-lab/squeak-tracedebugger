primitives
context: aContext primitiveInterruptSemaphore: receiver do: aBlock
	<simPrimitive: 134>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value