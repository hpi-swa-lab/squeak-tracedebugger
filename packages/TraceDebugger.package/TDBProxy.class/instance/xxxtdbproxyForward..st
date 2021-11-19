private
xxxtdbproxyForward: aBlock
	
	| result |
	result := (TDBRetracingSimulator forMemory: memory atTime: timeIndex)
		evaluate: aBlock.
	^ (nil == result or: [true == result] or: [false == result] or: [result class isImmediateClass] or: [result class == Symbol])
		ifTrue: [result]
		ifFalse: [self class for: result in: memory atTime: timeIndex]