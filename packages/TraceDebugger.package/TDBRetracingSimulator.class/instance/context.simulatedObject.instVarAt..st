private
context: aContext simulatedObject: anObject instVarAt: index

	index > 0
		ifFalse: [^ self context: aContext primitiveFailTokenFor: #'bad index'].
	
	^ memory
		object: anObject
		atTime: timeIndex
		atSlot: index negated
		ifAbsent: [aContext object: anObject instVarAt: index]