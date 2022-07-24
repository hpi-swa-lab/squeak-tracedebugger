primitives
context: aContext primitiveSetFullScreen: receiver value: value do: aBlock
	<simPrimitive: 233>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value