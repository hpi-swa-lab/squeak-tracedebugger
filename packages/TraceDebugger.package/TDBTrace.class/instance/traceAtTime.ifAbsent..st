accessing
traceAtTime: timeIndex ifAbsent: absentBlock

	| assocs i nextTime size assoc prevAssoc |
	#optimized. "findBinary/findDelta are NOT faster here. We could still try to implement inline binary search."
	
	timeIndex > self maxTimeIndex ifTrue: [^ absentBlock value].
	
	assocs := self children tdbOrder. "exploit the the OrderedDictionary's internal structure for greater performance"
	i := 0.
	size := assocs size.
	nextTime := 0.
	assoc := nil.
	[(nextTime <= timeIndex ifTrue: [prevAssoc := assoc. true] ifFalse: [false])
		and: [(i := i + 1) <= size]]
			whileTrue:
				[(assocs at: i) ifNotNil: [:nextAssoc |
					(nextTime := (assoc := nextAssoc) key) = timeIndex
						ifTrue: [^ assoc value traceAtTime: timeIndex]]].
	^ (prevAssoc ifNotNil: [:left | left value traceAtTime: timeIndex ifAbsent: []])
		ifNil: [timeIndex <= timeInterval stop
			ifTrue: [self]
			ifFalse: [absentBlock value]]