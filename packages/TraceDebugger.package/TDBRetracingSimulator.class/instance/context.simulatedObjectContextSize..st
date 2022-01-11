private
context: aContext simulatedObjectContextSize: aContextObject

	^ memory
		object: aContextObject
		atTime: timeIndex
		atSlot: -3 "stackp"
		ifAbsent: [aContext objectSize: aContextObject]