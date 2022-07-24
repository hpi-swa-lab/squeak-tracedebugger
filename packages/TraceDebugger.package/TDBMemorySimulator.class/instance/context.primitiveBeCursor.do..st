primitives
context: aContext primitiveBeCursor: receiver do: aBlock
	<simPrimitive: 101>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value