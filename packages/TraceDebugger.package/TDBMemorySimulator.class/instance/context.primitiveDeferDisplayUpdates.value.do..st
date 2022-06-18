primitives
context: aContext primitiveDeferDisplayUpdates: receiver value: value do: aBlock
	<simPrimitive: 126>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value