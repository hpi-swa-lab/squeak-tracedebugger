primitives
context: aContext primitiveClipboardText: receiver do: aBlock
	<simPrimitive: 141>
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext].
	
	^ aBlock value