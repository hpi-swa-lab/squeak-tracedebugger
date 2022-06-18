primitives
context: aContext primitiveLowSpaceSemaphore: receiver value: value do: aBlock
	<simPrimitive: 124>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value