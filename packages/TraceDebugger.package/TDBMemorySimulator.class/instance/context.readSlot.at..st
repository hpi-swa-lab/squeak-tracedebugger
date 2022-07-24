private
context: aContext readSlot: anObject at: anInteger

	| getterPrimitiveIndex result |
	getterPrimitiveIndex := lastPrimitive
		ifNil: [^ aContext object: anObject basicAt: anInteger]
		ifNotNil: [:primitiveIndex |
			(((primitiveIndex = 60 "primitiveAt" or: [primitiveIndex = 61] "primitiveAtPut") and: [(aContext objectClass: anObject) tdbIsVariableStringClass])
				ifTrue: [63 "primitiveStringAt" "the setter primitive converts the byte argument to a character"]
				ifFalse:
					[(primitiveIndex = 105 "primitiveStringReplace" or: [primitiveIndex = 145 "primitiveConstantFill"])
						ifTrue: [((aContext objectClass: anObject) tdbIsFloatArrayClass)
							ifTrue: [238 "primitiveFloatAt"]
							ifFalse: [60 "primitiveAt"]]
						ifFalse: [primitiveIndex]])].
	
	result := "aContext
		receiver:" anObject
		tryPrimitive: getterPrimitiveIndex
		withArgs: {anInteger}.
	self flag: #workaround. "Context >> #receiver:tryPrimitive:withArgs: is broken at the moment"
	
	(aContext isPrimFailToken: result)
		ifTrue: [self error: ('Could not read old field value via primitive {1}' format: {getterPrimitiveIndex})].
	
	^ result