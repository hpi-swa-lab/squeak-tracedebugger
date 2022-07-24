instruction processing
context: aContext pushConsArrayWithElements: numElements do: aBlock
	<tdbRequiredIf: #shouldIsolate>

	| result |
	result := super context: aContext pushConsArrayWithElements: numElements do: aBlock.
	(aContext isPrimFailToken: result) ifTrue: [^ result].
	
	self addOwnObject: result top.
	^ result