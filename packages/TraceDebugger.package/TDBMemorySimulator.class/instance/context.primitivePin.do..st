primitives
context: aContext primitivePin: receiver do: aBlock
	<simPrimitive: 184>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value