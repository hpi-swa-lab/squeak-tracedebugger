primitives
context: aContext primitiveGrowMemory: receiver byAtLeast: value do: aBlock
	<simPrimitive: 180>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value