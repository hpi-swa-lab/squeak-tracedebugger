instance creation
for: anObject inMemory: aMemory atTime: timeIndex withSideEffects: sideEffects

	^ self basicNew
		xxxtdbproxyObject: anObject
		memory: aMemory
		timeIndex: timeIndex
		sideEffects: sideEffects