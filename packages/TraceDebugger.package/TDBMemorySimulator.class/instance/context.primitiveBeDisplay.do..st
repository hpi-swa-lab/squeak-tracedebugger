primitives
context: aContext primitiveBeDisplay: receiver do: aBlock
	<simPrimitive: 102>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value