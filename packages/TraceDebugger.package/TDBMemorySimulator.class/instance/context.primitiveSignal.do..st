primitives
context: aContext primitiveSignal: receiver do: aBlock
	<simPrimitive: 85>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value