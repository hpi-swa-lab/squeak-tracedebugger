controlling
context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: originalArguments do: aBlock

	| arguments |
	"Resolve proxy arguments for the same memory by replacing them with the original object. See TDBProxy>>#xxxtdbproxyForward: and senders."
	arguments := nil.
	originalArguments withIndexDo: [:argument :index |
		((aContext objectClass: argument) isTdbProxyClass
			and: [argument xxxtdbproxyMemory == memory])
				ifTrue: [(arguments ifNil: [arguments := originalArguments copy])
					at: index put: argument xxxtdbproxyObject]].
	arguments ifNil: [arguments := originalArguments].
	
	^ super
		context: aContext
		doPrimitive: primitiveIndex
		method: aCompiledMethod
		receiver: receiver
		args: arguments
		do: aBlock