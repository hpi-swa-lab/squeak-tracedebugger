primitives
context: aContext primitiveNew: receiver do: aBlock
	<simPrimitive: 70>
	<tdbRequiredIf: #shouldIsolate>

	^ self
		context: aContext
		primitiveNew: receiver
		withArg: nil
		do: aBlock