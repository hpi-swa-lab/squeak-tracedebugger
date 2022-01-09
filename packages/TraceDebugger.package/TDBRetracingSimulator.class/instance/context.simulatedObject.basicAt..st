private
context: aContext simulatedObject: anObject basicAt: index

	self flag: #refactor. "The knowledge about the memory structure is currently very scattered!"
	index > 0
		ifFalse: [^ self context: aContext primitiveFailTokenFor: #'bad index'].
	
	^ memory
		object: anObject
		atTime: timeIndex
		atSlot: index
		ifAbsent: [aContext object: anObject basicAt: index]