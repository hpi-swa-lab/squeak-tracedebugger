controlling
context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: originalArguments do: aBlock

	| arguments oneArgSelector unarySelector unaryPostSelector postResult |
	"Resolve proxy arguments for the same memory by replacing them with the original receiver."
	arguments := nil.
	originalArguments withIndexDo: [:argument :index |
		((aContext objectClass: argument) isTdbProxyClass
			and: [argument xxxtdbproxyMemory == memory])
				ifTrue: [(arguments ifNil: [arguments := originalArguments copy])
					at: index put: argument xxxtdbproxyObject]].
	arguments ifNil: [arguments := originalArguments].
	
	self flag: #todo. "There might be much more primitives that access image state."
	primitiveIndex
		caseOf:
			{[38 "primitiveFloatAt"] -> [oneArgSelector := #context:pushField:at:ifHit:].
			[60 "primitiveAt"] -> [oneArgSelector := #context:pushField:at:ifHit:].
			[63 "primitiveStringAt"] -> [oneArgSelector := #context:pushField:at:ifHit:].
			[68 "primitiveObjectAt"] -> [oneArgSelector := #context:pushField:at:ifHit:].
			[73 "primitiveInstVarAt"] -> [oneArgSelector := #context:pushInstVar:at:ifHit:].
			[105 "primitiveStringReplace"] ->
				[self flag: #optimize.
				^ self context: aContext primitiveFailTokenFor: nil "use image implementation"].
			[117 "primitiveExternalCall"] -> [self context: aContext doNamedPrimitiveIn: aCompiledMethod for: receiver withArgs: arguments ifHit: [:result | ^ result]].
			[143 "primitiveShortAt"] -> [oneArgSelector := #context:pushField:at:ifHit:].
			[148 "primitiveClone"] -> [unaryPostSelector := #context:cloneIntoTop:].
			[165 "primitiveIntegerAt"] -> [oneArgSelector := #context:pushField:at:ifHit:].
			[168 "primitiveCopyObject"] -> [^ self context: aContext primitiveFailTokenFor: nil "use image implementation"].
			[173 "primitiveSlotAt"] -> [oneArgSelector := #context:pushInstVar:at:ifHit:].
			[210 "primitiveContextAt"] -> [oneArgSelector := #context:pushField:at:ifHit:].
			[212 "primitiveContextSize"] -> [unarySelector := #context:pushContextSize:ifHit:].
			[238 "primitiveFloatAt"] -> [oneArgSelector := #context:pushField:at:ifHit:].}
		otherwise: [
			(primitiveIndex >= 264 and: [primitiveIndex <=  519]) "primitiveLoadInstVar"
				ifTrue: [self
					context: aContext
					pushInstVar: receiver
					at: primitiveIndex - 264 + 1
					ifHit: [:result | ^ result]]].
	
	"Look up cache for primitives that access state"
	self flag: #todo. "Robustize primitives against missing arguments (return fail tokens)?"
	self flag: #optimize. "Use unique primitiveFailToken instead of ifInMemory: closures and check for this token here instead of returning above"
	oneArgSelector ifNotNil:
		[self
			perform: oneArgSelector
			with: aContext
			with: (arguments atLast: 2 ifAbsent: [receiver])
			with: (arguments atLast: 1)
			with: [:result | ^ result]].
	unarySelector ifNotNil:
		[self
			perform: unarySelector
			with: aContext
			with: (arguments atLast: 1 ifAbsent: [receiver])
			with: [:result | ^ result]].
	
	postResult := super
		context: aContext
		doPrimitive: primitiveIndex
		method: aCompiledMethod
		receiver: receiver
		args: arguments
		do: aBlock.
	
	unaryPostSelector ifNotNil:
		[postResult := self
			perform: unaryPostSelector
			with: postResult
			with: (arguments atLast: 1 ifAbsent: [receiver])].
	
	^ postResult