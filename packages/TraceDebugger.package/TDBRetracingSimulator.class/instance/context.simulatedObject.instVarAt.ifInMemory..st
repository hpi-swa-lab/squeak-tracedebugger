private
context: aContext simulatedObject: anObject instVarAt: index ifInMemory: aBlock

	| result |
	index > 0
		ifFalse: [^ self context: aContext primitiveFailTokenFor: #'bad index'].
	
	result := memory
		object: anObject
		atTime: timeIndex
		atSlot: index negated
		ifAbsent: [^ nil].
	^ aBlock value: result