primitives
context: aContext primitiveNew: receiver withArg: argument do: aBlock
	<simPrimitive: 71>
	<tdbRequiredIf: #shouldIsolate>

	^ self context: aContext primitiveNew: receiver do: aBlock