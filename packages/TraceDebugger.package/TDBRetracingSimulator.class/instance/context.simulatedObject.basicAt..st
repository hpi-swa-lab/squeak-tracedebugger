private
context: aContext simulatedObject: anObject basicAt: index

	index > 0
		ifFalse: [^ self context: aContext primitiveFailTokenFor: #'bad index'].
	
	^ memory
		object: anObject
		atTime: timeIndex
		atSlot: index
		ifAbsent: [aContext object: anObject basicAt: index]