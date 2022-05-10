primitives
context: aContext primitiveGetNextEvent: receiver do: aBlock
	<simPrimitive: 94>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value