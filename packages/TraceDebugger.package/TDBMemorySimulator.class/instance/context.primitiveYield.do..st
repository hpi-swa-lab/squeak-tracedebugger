primitives
context: aContext primitiveYield: receiver do: aBlock
	<simPrimitive: 167>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value