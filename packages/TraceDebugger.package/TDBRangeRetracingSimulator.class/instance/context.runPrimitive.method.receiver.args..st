private
context: aContext runPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments
	"Simulate a primitive method whose index is primitiveIndex. If the primitive fails, activate the method."

	| result |
	result := aContext
		doPrimitive: primitiveIndex
		method: aCompiledMethod
		receiver: receiver
		args: arguments.
	^ (aContext isPrimFailToken: result)
		ifFalse: [result]
		ifTrue:
			[(aContext activateMethod: aCompiledMethod withArgs: arguments receiver: receiver)
				failPrimitiveWith: result]