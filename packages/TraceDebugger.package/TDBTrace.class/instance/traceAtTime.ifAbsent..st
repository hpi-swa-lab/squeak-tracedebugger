accessing
traceAtTime: timeIndex ifAbsent: absentBlock

	| assocs assoc high index low test |
	#optimized. "inline binary search"
	
	timeIndex > self maxTimeIndex ifTrue: [^ absentBlock value].
	
	assocs := self children tdbOrder. "exploit the OrderedDictionary's internal structure for greater performance"
	low := 1.
	high := self children tdbTally.
	[high < low] whileFalse:
		[index := high + low // 2.
		(test := timeIndex - (assoc := assocs at: index) key) < 0
			ifTrue: [high := index - 1]
			ifFalse: [0 < test
				ifTrue: [low := index + 1]
				ifFalse:
					["test = 0"
					^ assoc value traceAtTime: timeIndex]]].
	^ ((high > 0 ifTrue: [assocs at: high]) ifNotNil: [:left |
		(left value traceAtTime: timeIndex ifAbsent: nil)])
			ifNil: [timeIndex <= timeInterval stop
				ifTrue: [self]
				ifFalse: [absentBlock value]]