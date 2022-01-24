private
context: aContext simulatedObject: anObject basicAt: index ifHit: aBlock

	| result |
	index > 0
		ifFalse: [^ self context: aContext primitiveFailTokenFor: #'bad index'].
	
	result := memory
		object: anObject
		atTime: timeIndex
		fieldAt: index
		ifAbsent: [^ nil].
	^ aBlock value: result