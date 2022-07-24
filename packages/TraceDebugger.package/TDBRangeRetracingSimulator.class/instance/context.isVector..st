private - vectors
context: aContext isVector: anObject

	^ (aContext objectClass: anObject) isTdbMemorySliceClass
		and: [anObject memory == memory]