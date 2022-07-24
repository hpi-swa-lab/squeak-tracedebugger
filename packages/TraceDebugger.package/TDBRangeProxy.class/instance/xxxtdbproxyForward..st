private
xxxtdbproxyForward: aBlock

	| simulator result |
	simulator := TDBRetracingSimulator forMemory: memory atTimes: timeIndex.
	sideEffects ifNotNil:
		[simulator sideEffects: sideEffects.
		"No copying of side effects is necessary here since the simulator will fork itself right at the beginning. See TDBRangeRetracingSimulator>>#context:runSimulated:contextAtEachStep:do:."].
	
	result := simulator evaluate: aBlock.
	result hasSingleValue ifFalse:
		[TDBRetracingFrayOut signalForProxy: self slice: result].
	
	^ result rawValues first
		tdbInMemory: memory
		atTimes: timeIndex
		withSideEffects: result sideEffects first