primitives
context: aContext primitiveSuspend: receiver do: aBlock
	<simPrimitive: 88>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value