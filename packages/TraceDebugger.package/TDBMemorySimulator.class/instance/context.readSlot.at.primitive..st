private
context: aContext readSlot: anObject at: anInteger primitive: getterPrimitiveIndex

	| result |
	result := "aContext
		receiver:" anObject
		tryPrimitive: getterPrimitiveIndex
		withArgs: {anInteger}.
	self flag: #workaround. "Context >> #receiver:tryPrimitive:withArgs: is broken at the moment"
	
	(aContext isPrimFailToken: result)
		ifTrue: [self error: ('Could not read old field value via primitive {1}' format: {getterPrimitiveIndex})].
	
	^ result