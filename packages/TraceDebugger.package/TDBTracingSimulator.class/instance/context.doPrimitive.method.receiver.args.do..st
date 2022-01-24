controlling
context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock

	| recordSelector result |
	primitiveIndex
		caseOf:
			{[39 "primitiveFloatAtPut"] -> [recordSelector := #record:fieldAt:oldValue:].
			[61 "primitiveAtPut"] -> [recordSelector := #record:fieldAt:oldValue:].
			[64 "primitiveStringAtPut"] -> [recordSelector := #record:fieldAt:oldValue:].
			[69 "primitiveObjectAtPut"] -> [recordSelector := #record:fieldAt:oldValue:].
			[74 "primitiveInstVarAtPut"] -> [recordSelector := #record:instVarAt:oldValue:].
			[103 "primitiveScanCharacters"] ->
				[self flag: #optimize.
				^ self context: aContext primitiveFailTokenFor: nil "use image implementation"].
			[105 "primitiveStringReplace"] ->
				[self flag: #optimize.
				^ self context: aContext primitiveFailTokenFor: nil "use image implementation"].
			[144 "primitiveShortAtPut"] -> [recordSelector := #record:fieldAt:oldValue:].
			[145 "primitiveConstantFill"] ->
				[self flag: #optimize.
				^ self context: aContext primitiveFailTokenFor: nil "use image implementation"].
			[166 "primitiveIntegerAtPut"] -> [recordSelector := #record:fieldAt:oldValue:].
			[174 "primitiveSlotAtPut"] -> [recordSelector := #record:instVarAt:oldValue:].
			[211 "primitiveContextAtPut"] -> [recordSelector := #record:fieldAt:oldValue:].
			[239 "primitiveFloatAtPut"] -> [recordSelector := #record:fieldAt:oldValue:]}
		otherwise: [].
	
	"Fill cache for primitives that change state"
	self flag: #todo. "Robustize primitives against missing arguments - return fail tokens"
	self flag: #optimize. "Use unique primitiveFailToken instead of ifInMemory: closures and check for this token here instead of returning above"
	
	recordSelector ifNotNil:
		[| index object oldValue |
		object := arguments atLast: 3 ifAbsent: [receiver].
		index := arguments atLast: 2.
		oldValue := self context: aContext readSlot: object at: index primitive:
			((primitiveIndex = 61 "primitiveAtPut" and: [(aContext objectClass: object) includesBehavior: String])
				ifTrue: [63 "primitiveStringAt" "the setter primitive converts the byte argument to a character"]
				ifFalse: [primitiveIndex - 1]).
		result := super
			context: aContext
			doPrimitive: primitiveIndex
			method: aCompiledMethod
			receiver: receiver
			args: arguments
			do: aBlock.
		(aContext isPrimFailToken: result) ifFalse:
			[self
				perform: recordSelector
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