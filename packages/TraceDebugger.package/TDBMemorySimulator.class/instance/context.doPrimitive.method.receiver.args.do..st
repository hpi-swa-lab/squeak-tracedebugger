controlling
context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock
	<tdbRequiredIf: #wantsToControlReads>
	<tdbRequiredIf: #hasPrimitives>

	| result |
	self flag: #moveUpstream. "Move up to SimulationStudio? Can we offer a CoR for primitive hooks?"
	self flag: #todo. "Robustize primitives against missing arguments - return fail tokens"
	
	lastPrimitive := primitiveIndex.
	(primitiveIndex >= 264 and: [primitiveIndex <= 519]) "primitiveLoadInstVar"
		ifTrue:
			[self
				context: aContext
				simulatedObject: receiver
				instVarAt: primitiveIndex - 264 + 1
				ifHit: [:value |
					lastPrimitive := nil.
					(aContext isPrimFailToken: value) ifTrue: [^ value].
					^ aContext push: value]].
	
	"Dispatch to registered primitives."
	result := (primitives
		at: primitiveIndex
		ifAbsent: [])
			ifNotNil: [:block | block value: aContext value: aCompiledMethod value: receiver value: arguments value: [super context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock]]
			ifNil: [super context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock].
	lastPrimitive := nil.
	^ result