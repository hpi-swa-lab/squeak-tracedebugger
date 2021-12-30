private
xxxtdbproxyForward: aBlock
	<ignoreForCoverage>
	
	| result |
	result := (TDBRetracingSimulator forMemory: memory atTime: timeIndex)
		evaluate: aBlock.
	^ TDBProxy for: result in: memory atTime: timeIndex