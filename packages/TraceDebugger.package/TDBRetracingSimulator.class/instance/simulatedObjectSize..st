private
simulatedObjectSize: anObject

	^ memory
		object: anObject
		atTime: timeIndex
		atSlot: 0
		ifAbsent: [thisContext objectSize: anObject]