primitives
context: aContext primitiveSetInterruptKey: receiver do: aBlock
	<simPrimitive: 133>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value