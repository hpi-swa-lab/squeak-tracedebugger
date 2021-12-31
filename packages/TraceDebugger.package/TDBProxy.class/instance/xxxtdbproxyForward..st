private
xxxtdbproxyForward: aBlock
	<ignoreForCoverage>
	
	| result |
	result := (TDBRetracingSimulator forMemory: memory atTime: timeIndex)
		evaluate: aBlock.
	^ result asTdbProxyInMemory: memory atTime: timeIndex