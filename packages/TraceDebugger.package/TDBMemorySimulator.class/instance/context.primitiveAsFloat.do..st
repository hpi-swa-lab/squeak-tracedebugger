primitives
context: aContext primitiveAsFloat: receiver do: aBlock
	<simPrimitive: 40>
	<tdbRequiredIf: #shouldIsolate>

	| result |
	result := aBlock value.
	self addOwnObject: result top.
	^ result