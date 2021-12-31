accessing
traceAtTime: timeIndex ifAbsent: absentBlock

	| assocs i nextTime size assoc prevAssoc |
	self flag: #optimized. "findBinary/findDelta are NOT faster here. We could still try to implement inline binary search."
	
	assocs := self children associations.
	i := 0.
	size := assocs size.
	nextTime := 0.
	assoc := nil.
	[(nextTime <= timeIndex ifTrue: [prevAssoc := assoc. true] ifFalse: [false])
		and: [(i := i + 1) <= size]]
			whileTrue:
				[assoc := assocs at: i.
				(nextTime := assoc key) = timeIndex
					ifTrue: [^ assoc value traceAtTime: timeIndex]].
	^ (prevAssoc ifNotNil: [:left | left value traceAtTime: timeIndex ifAbsent: []])
		ifNil: [timeIndex <= timeInterval stop
			ifTrue: [self]
			ifFalse: [absentBlock value]]