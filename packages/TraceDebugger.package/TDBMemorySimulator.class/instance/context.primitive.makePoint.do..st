primitives
context: aContext primitive: receiver makePoint: argument do: aBlock
	<simPrimitive: 18>
	<tdbRequiredIf: #shouldIsolate>

	^ self context: aContext primitiveNew: receiver do: aBlock