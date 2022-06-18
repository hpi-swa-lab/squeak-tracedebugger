primitives
context: aContext primitiveCalloutToFFI: receiver method: aCompiledMethod withArgs: arguments do: aBlock
	<simRawPrimitive: 120>
	<tdbRequiredIf: #shouldIsolate>
	<tdbRequiredIf: #hasPragmaPrimitives>

	^ self context: aContext primitiveExternalCall: receiver method: aCompiledMethod withArgs: arguments do: aBlock