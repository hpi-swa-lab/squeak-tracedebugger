primitives
context: aContext primitiveSnapshotEmbedded: receiver do: aBlock
	<simPrimitive: 247>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value