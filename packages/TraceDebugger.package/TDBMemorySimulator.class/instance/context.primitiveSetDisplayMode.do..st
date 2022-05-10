primitives
context: aContext primitiveSetDisplayMode: receiver do: aBlock
	<simPrimitive: 92>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value