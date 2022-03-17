controlling
context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: originalArguments do: aBlock
	"Redirect primitives that read any state. If the relevant object's slot is defined in the historic memory, use the recorded state from there instead of the current state for the object in  the image."

	| arguments oneArgSelector unarySelector unaryPostSelector postResult |
	"Resolve proxy receiver/arguments for the same memory by replacing them with the original object. See TDBProxy>>#xxxtdbproxyForward: and senders."
	arguments := nil.
	originalArguments withIndexDo: [:argument :index |
		((aContext objectClass: argument) isTdbProxyClass
			and: [argument xxxtdbproxyMemory == memory])
				ifTrue: [(arguments ifNil: [arguments := originalArguments copy])
					at: index put: argument xxxtdbproxyObject]].
	arguments ifNil: [arguments := originalArguments].
	
	"Identify redirect strategy"
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
		otherwise:
			[(primitiveIndex >= 264 and: [primitiveIndex <=  519]) "primitiveLoadInstVar"
				ifTrue: [self
					context: aContext
					pushInstVar: receiver
					at: primitiveIndex - 264 + 1
					ifHit: [:result | ^ result]]].
	
	self flag: #todo. "Robustize primitives against missing arguments (return fail tokens)?"
	self flag: #optimize. "Use unique primitiveFailToken instead of ifHit: closures and check for this token here instead of returning above. Would this be faster?"
	
	"Apply redirect strategy"
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
	
	"No redirect required or no earlier state found in memory, continue with next simulator"
	postResult := super
		context: aContext
		doPrimitive: primitiveIndex
		method: aCompiledMethod
		receiver: receiver
		args: arguments
		do: aBlock.
	
	"Postpare redirect"
	unaryPostSelector ifNotNil:
		[postResult := self
			perform: unaryPostSelector
			with: postResult
			with: (arguments atLast: 1 ifAbsent: [receiver])].
	
	^ postResult