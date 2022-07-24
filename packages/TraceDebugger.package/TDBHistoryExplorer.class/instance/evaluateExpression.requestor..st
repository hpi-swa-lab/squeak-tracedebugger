evaluating
evaluateExpression: aStringOrText requestor: requestor

	| block slice |
	block := self
		compileToBlock: aStringOrText
		requestor: requestor
		ifFail:
			[self flag: #workaround. "#evaluateExpression:requestor: should allow for ifFail: argument"
			^ self tdbAbortRequest].
	
	slice := [self cursor object: self object collect: block]
		on: TDBIsolatedError do: [:ex |
			| timeToDebug timesAndErrors |
			ex exception isTdbMemorySlice ifFalse: [ex pass].
			timesAndErrors := ex exception timesAndValues reject: #isNil.
			timeToDebug := timesAndErrors size = 1
				ifTrue: [timesAndErrors keys anyOne]
				ifFalse:
					[(Project uiManager
						chooseFromLabeledValues:
							(timesAndErrors associations
								collect: [:timeAndError | ('[@ {1}] {2}' format: {timeAndError key. timeAndError value description}) -> timeAndError key]
								as: OrderedDictionary)
						title: 'Expression failed. What time to debug?')].
			timeToDebug ifNotNil:
				[self cursor memory object: self object atTimes: timeToDebug debug: block].
			^ self tdbAbortRequest].
	
	^ slice