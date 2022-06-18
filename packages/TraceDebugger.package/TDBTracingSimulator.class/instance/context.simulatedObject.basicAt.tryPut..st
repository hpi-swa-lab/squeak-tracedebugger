private - object access
context: aContext simulatedObject: anObject basicAt: index tryPut: value

	| oldValue |
	index > 0 ifFalse: [^ false].
	index > (aContext objectSize: anObject) ifTrue: [^ false].
	
	oldValue := lastPrimitive
		ifNil: [aContext object: anObject basicAt: index]
		ifNotNil: [:primitiveIndex |
			self context: aContext readSlot: anObject at: index primitive:
				((primitiveIndex = 61 "primitiveAtPut" and: [(aContext objectClass: anObject) tdbIsVariableStringClass])
					ifTrue: [63 "primitiveStringAt" "the setter primitive converts the byte argument to a character"]
					ifFalse:
						[(primitiveIndex = 105 "primitiveStringReplace" or: [primitiveIndex = 145 "primitiveConstantFill"])
							ifTrue:
								[((aContext objectClass: anObject) tdbIsFloatArrayClass)
									ifTrue: [238 "primitiveFloatAt"]
									ifFalse: [60 "primitiveAt"]]
							ifFalse: [primitiveIndex - 1 "all setter primitives follow immediately after their getter pendant"]])].
	self record: anObject fieldAt: index oldValue: oldValue.
	
	^ super context: aContext simulatedObject: anObject basicAt: index tryPut: value