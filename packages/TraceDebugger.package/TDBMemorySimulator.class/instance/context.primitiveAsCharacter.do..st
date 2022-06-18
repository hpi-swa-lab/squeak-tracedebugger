primitives
context: aContext primitiveAsCharacter: receiver do: aBlock
	<simPrimitive: 170>
	<tdbRequiredIf: #shouldIsolate>

	| result |
	result := aBlock value.
	self addOwnObject: result top.
	^ result