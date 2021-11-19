controlling
context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: originalArguments do: aBlock

	| arguments |
	arguments := nil.
	originalArguments withIndexDo: [:argument :index |
		((aContext objectClass: argument) == TDBProxy
			and: [argument xxxtdbproxyMemory == memory])
				ifTrue: [(arguments ifNil: [arguments := originalArguments copy])
					at: index put: argument xxxtdbproxyObject]].
	arguments ifNil: [arguments := originalArguments].
	
	primitiveIndex
		caseOf:
			{[38 "primitiveFloatAt"] -> [self context: aContext pushField: receiver at: arguments first ifInMemory: [:result | ^ result]].
			[60 "primitiveAt"] -> [self context: aContext pushField: receiver at: arguments first ifInMemory: [:result | ^ result]].
			[62 "primitiveSize"] -> [^ aContext push:
				(self simulatedObjectSize: receiver)].
			[63 "primitiveStringAt"] -> [self context: aContext pushField: receiver at: arguments first ifInMemory: [:result | ^ result]].
			[68 "primitiveObjectAt"] -> [self context: aContext pushField: receiver at: arguments first ifInMemory: [:result | ^ result]].
			[73 "primitiveInstVarAt"] -> [self context: aContext pushInstVar: receiver at: arguments first ifInMemory: [:result | ^ result]].
			[143 "primitiveShortAt"] -> [self context: aContext pushField: receiver at: arguments first ifInMemory: [:result | ^ result]].
			[165 "primitiveIntegerAt"] -> [self context: aContext pushField: receiver at: arguments first ifInMemory: [:result | ^ result]].
			[173 "primitiveSlotAt"] -> [self context: aContext pushInstVar: receiver at: arguments first ifInMemory: [:result | ^ result]].
			[210 "primitiveContextAt"] -> [self context: aContext pushField: receiver at: arguments first ifInMemory: [:result | ^ result]].
			[212 "primitiveContextSize"] -> [^ self context: aContext push:
				(self simulatedObjectSize: receiver)]}
		otherwise: [
			(primitiveIndex >= 264 and: [primitiveIndex <=  519]) "primitiveLoadInstVar"
				ifTrue: [self context: aContext pushInstVar: receiver at: primitiveIndex - 264 + 1 ifInMemory: [:result | ^ result]]].
	
	self flag: #optimize. "Use unique primitiveFailToken instead of ifInMemory: closures and check for this token here instead of returning above"
	
	^ super
		context: aContext
		doPrimitive: primitiveIndex
		method: aCompiledMethod
		receiver: receiver
		args: arguments
		do: aBlock