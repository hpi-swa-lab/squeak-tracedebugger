primitives
context: aContext primitiveNew: receiver do: aBlock
	<simPrimitive: 70>
	<tdbRequiredIf: #shouldIsolate>

	| result |
	result := aBlock value.
	self addOwnObject: result top.
	^ result