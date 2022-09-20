primitives
context: aContext primitiveSuspendBackingUpV2: receiver do: aBlock
	<simPrimitive: 578>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value