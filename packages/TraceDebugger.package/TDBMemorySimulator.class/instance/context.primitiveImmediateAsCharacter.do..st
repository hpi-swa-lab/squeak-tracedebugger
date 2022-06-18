primitives
context: aContext primitiveImmediateAsCharacter: receiver do: aBlock
	<simPrimitive: 171>
	<tdbRequiredIf: #shouldIsolate>

	| result |
	result := aBlock value.
	self addOwnObject: result top.
	^ result