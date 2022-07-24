primitives
context: aContext primitiveUnload: receiver module: module do: aBlock
	<simPrimitive: 571>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value