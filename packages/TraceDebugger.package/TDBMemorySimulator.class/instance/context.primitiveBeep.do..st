primitives
context: aContext primitiveBeep: receiver do: aBlock
	<simPrimitive: 140>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value