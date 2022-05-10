primitives
context: aContext primitiveExternalCall: receiver method: aCompiledMethod withArgs: arguments do: aBlock
	<simRawPrimitive: 117>
	<tdbRequiredIf: #hasPragmaPrimitives>
	<tdbRequiredIf: #shouldIsolate>

	| literal pluginName primitiveName |
	literal := aCompiledMethod literalAt: 1.
	literal isArray ifFalse: [^ self forbiddenOperationForContext: aContext].
	pluginName := literal first.
	primitiveName := literal second.
	
	^ pragmaPrimitives
		at: pluginName
		ifPresent: [:block | block valueWithEnoughArguments: {aContext. primitiveName. receiver. aCompiledMethod. arguments. aBlock}]
		ifAbsent:
			[self shouldIsolate ifTrue:
				[^ self forbiddenOperationForContext: aContext].
			aBlock value]