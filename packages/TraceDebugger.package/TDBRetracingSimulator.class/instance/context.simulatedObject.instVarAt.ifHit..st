private
context: aContext simulatedObject: anObject instVarAt: index ifHit: aBlock

	| result |
	index > 0 ifFalse:
		[^ self context: aContext primitiveFailTokenFor: #'bad index'].
	
	result := memory
		object: anObject
		atTime: timeIndex
		instVarAt: index
		ifAbsent: [^ nil].
	^ aBlock value: result