controlling
context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: originalArguments do: aBlock
	"Redirect primitives that read any state. If the relevant object's slot is defined in the historic memory, use the recorded state from there instead of the current state for the object in the image."

	| arguments receiverAndArgs |
	"Resolve proxy receiver/arguments for the same memory by replacing them with the original object. See TDBProxy>>#xxxtdbproxyForward: and senders."
	arguments := nil.
	originalArguments withIndexDo: [:argument :index |
		((aContext objectClass: argument) isTdbProxyClass
			and: [argument xxxtdbproxyMemory == memory])
				ifTrue: [(arguments ifNil: [arguments := originalArguments copy])
					at: index put: argument xxxtdbproxyObject]].
	arguments ifNil: [arguments := originalArguments].
	
	self flag: #todo. "Handle missing arguments gracefully"
	self flag: #optimize. "Do not combine unused arguments (e.g., for mirror primitives)"
	self flag: #optimize. "Array lookup for primitives?"
	
	"Dispatch to registered primitive handlers."
	(PrimitiveHandlers at: primitiveIndex) ifNotNil: [:handler |
		| result |
		lastPrimitive := primitiveIndex.
		result := self perform: handler withArguments: {aContext. primitiveIndex. aCompiledMethod. receiver. arguments. aBlock}.
		lastPrimitive := nil.
		^ result].
	
	"For all unknown primitives, fork if there are multiple vector combinations of the receiver and the arguments."
	receiverAndArgs := self
		context: aContext
		combineArguments: (arguments copyWithFirst: receiver)
		collect: [:eachReceiverAndArgs | eachReceiverAndArgs].
	(self context: aContext isVector: receiverAndArgs) ifFalse:
		[^ super
			context: aContext
			doPrimitive: primitiveIndex
			method: aCompiledMethod
			receiver: receiver
			args: arguments
			do: aBlock].
	^ self fork: aContext for: receiverAndArgs collect: [:eachContext :eachReceiverAndArgs |
		self
			context: eachContext
			runPrimitive: primitiveIndex
			method: aCompiledMethod
			receiver: eachReceiverAndArgs first
			args: eachReceiverAndArgs allButFirst]