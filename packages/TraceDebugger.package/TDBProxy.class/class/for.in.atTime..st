instance creation
for: anObject in: aMemory atTime: timeIndex

	(nil == anObject or: [true == anObject] or: [false == anObject] or: [anObject class isImmediateClass] or: [(anObject class inheritsFrom: Symbol) or: [anObject class inheritsFrom: String]] or: [anObject isBehavior])
		ifTrue: [^ anObject].
	
	^ self basicNew
		xxxtdbproxyObject: anObject
		memory: aMemory
		timeIndex: timeIndex