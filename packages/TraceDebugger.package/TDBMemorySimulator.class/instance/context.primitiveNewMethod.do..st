primitives
context: aContext primitiveNewMethod: receiver do: aBlock
	<simPrimitive: 79>
	<tdbRequiredIf: #shouldIsolate>

	^ self context: aContext primitiveNew: receiver do: aBlock