controlling
context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: originalArguments do: aBlock
	"Redirect primitives that read any state. If the relevant object's slot is defined in the historic memory, use the recorded state from there instead of the current state for the object in  the image."

	| arguments |
	"Resolve proxy receiver/arguments for the same memory by replacing them with the original object. See TDBProxy>>#xxxtdbproxyForward: and senders."
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