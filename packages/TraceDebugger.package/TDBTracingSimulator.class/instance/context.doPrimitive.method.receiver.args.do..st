controlling
context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock

	| unarySelector oneArgSelector result |
	primitiveIndex
		caseOf:
			{[39 "primitiveFloatAtPut"] -> [oneArgSelector := #record:fieldAt:oldValue:].
			[61 "primitiveAtPut"] -> [oneArgSelector := #record:fieldAt:oldValue:].
			[64 "primitiveStringAtPut"] -> [oneArgSelector := #record:fieldAt:oldValue:].
			[69 "primitiveObjectAtPut"] -> [oneArgSelector := #record:fieldAt:oldValue:].
			[74 "primitiveInstVarAtPut"] -> [oneArgSelector := #record:instVarAt:oldValue:].
			[103 "primitiveScanCharacters"] ->
				[self flag: #optimize.
				^ self context: aContext primitiveFailTokenFor: nil "use image implementation"].
			[105 "primitiveStringReplace"] ->
				[self flag: #optimize.
				^ self context: aContext primitiveFailTokenFor: nil "use image implementation"].
			[144 "primitiveShortAtPut"] -> [oneArgSelector := #record:fieldAt:oldValue:].
			[145 "primitiveConstantFill"] -> [unarySelector := #record:oldFields:].
			[166 "primitiveIntegerAtPut"] -> [oneArgSelector := #record:fieldAt:oldValue:].
			[174 "primitiveSlotAtPut"] -> [oneArgSelector := #record:instVarAt:oldValue:].
			[211 "primitiveContextAtPut"] -> [oneArgSelector := #record:fieldAt:oldValue:].
			[239 "primitiveFloatAtPut"] -> [oneArgSelector := #record:fieldAt:oldValue:]}
		otherwise: [].
	
	"Fill cache for primitives that change state"
	self flag: #todo. "Robustize primitives against missing arguments - return fail tokens"
	self flag: #optimize. "Use unique primitiveFailToken instead of ifInMemory: closures and check for this token here instead of returning above"
	
	"Record slots before changing them"
	unarySelector ifNotNil:
		[| object oldValues |
		object := arguments atLast: 2 ifAbsent: [receiver].
		oldValues := (1 to: (aContext objectSize: object)) collect: [:index |
			self context: aContext readSlot: object at: index primitive: 60 "primitiveAt"].
		result := super
			context: aContext
			doPrimitive: primitiveIndex
			method: aCompiledMethod
			receiver: receiver
			args: arguments
			do: aBlock.
		(aContext isPrimFailToken: result) ifFalse:
			[self
				perform: unarySelector
				with: object
				with: oldValues].
		^ result].
	oneArgSelector ifNotNil:
		[| object index oldValue |
		object := arguments atLast: 3 ifAbsent: [receiver].
		index := arguments atLast: 2.
		oldValue := self context: aContext readSlot: object at: index primitive:
			((primitiveIndex = 61 "primitiveAtPut" and: [(aContext objectClass: object) includesBehavior: String])
				ifTrue: [63 "primitiveStringAt" "the setter primitive converts the byte argument to a character"]
				ifFalse: [primitiveIndex - 1 "all setter primitives follow immediately after their getter pendant"]).
		result := super
			context: aContext
			doPrimitive: primitiveIndex
			method: aCompiledMethod
			receiver: receiver
			args: arguments
			do: aBlock.
		(aContext isPrimFailToken: result) ifFalse:
			[self
				perform: oneArgSelector
				with: object
				with: index
				with: oldValue].
		^ result].
	
	^ super
		context: aContext
		doPrimitive: primitiveIndex
		method: aCompiledMethod
		receiver: receiver
		args: arguments
		do: aBlock.