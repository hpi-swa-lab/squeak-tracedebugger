private
context: aContext simulatedObject: anObject instVarAt: index
	"Look up requested state in the memory, If it is not recorded there, fall back to the current in-image state."

	index > 0 ifFalse:
		[^ self context: aContext primitiveFailTokenFor: #'bad index'].
	
	^ memory
		object: anObject
		atTime: timeIndex
		instVarAt: index
		ifAbsent: [aContext object: anObject instVarAt: index]