controlling
context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock
	<tdbRequiredIf: #wantsToControlReads>
	<tdbRequiredIf: #hasPrimitives>

	self flag: #moveUpstream. "Move up to SimulationStudio?"
	self flag: #todo. "Robustize primitives against missing arguments - return fail tokens"
	
	(primitiveIndex >= 264 and: [primitiveIndex <= 519]) "primitiveLoadInstVar"
		ifTrue:
			[self
				context: aContext
				simulatedObject: receiver
				instVarAt: primitiveIndex - 264 + 1
				ifHit: [:value | ^ aContext push: value]].
	
	^ (primitives
		at: primitiveIndex
		ifAbsent: [])
			ifNotNil: [:block | block value: aContext value: aCompiledMethod value: receiver value: arguments value: [super context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock]]
			ifNil: [super context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock]