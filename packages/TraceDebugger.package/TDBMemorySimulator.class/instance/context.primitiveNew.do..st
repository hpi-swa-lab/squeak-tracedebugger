primitives
context: aContext primitiveNew: receiver do: aBlock
	<simPrimitive: 70>
	<tdbRequiredIf: #shouldIsolate>

	| result |
	result := aBlock value.
	(aContext isPrimFailToken: result) ifTrue: [^ result].
	
	self addOwnObject: result top.
	^ result