instance creation
for: anObject inMemory: aMemory atTimes: timeIndices withSideEffects: sideEffects

	^ self basicNew
		xxxtdbproxyObject: anObject
		memory: aMemory
		timeIndices: timeIndices
		sideEffects: sideEffects