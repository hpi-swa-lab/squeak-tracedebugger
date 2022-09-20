primitives
context: aContext primitiveSuspendBackingUpV1: receiver do: aBlock
	<simPrimitive: 568>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value