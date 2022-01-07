private
context: aContext simulatedObject: anObject basicAt: index ifInMemory: aBlock

	| result |
	index > 0
		ifFalse: [^ self context: aContext primitiveFailTokenFor: #'bad index'].
	
	result := memory
		object: anObject
		atTime: timeIndex
		atSlot: index
		ifAbsent: [^ nil].
	^ aBlock value: result