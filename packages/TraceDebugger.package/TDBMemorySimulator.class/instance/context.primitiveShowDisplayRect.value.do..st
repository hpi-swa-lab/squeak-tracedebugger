primitives
context: aContext primitiveShowDisplayRect: receiver value: value do: aBlock
	<simPrimitive: 127>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value