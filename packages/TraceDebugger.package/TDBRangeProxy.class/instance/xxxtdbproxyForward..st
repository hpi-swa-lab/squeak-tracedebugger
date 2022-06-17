private
xxxtdbproxyForward: aBlock

	| simulator result |
	simulator := TDBRetracingSimulator forMemory: memory atTimes: timeIndex.
	sideEffects ifNotNil: [simulator sideEffects: sideEffects].
	result := simulator evaluate: aBlock.
	result hasSingleValue ifFalse:
		[TDBRetracingFrayOut signalForProxy: self slice: result].
	^ result rawValues first tdbInMemory: memory atTimes: timeIndex withSideEffects: result sideEffects first