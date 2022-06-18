accessing
associationAtTime: timeIndex ifAbsent: aBlock
	"Answer an association (interval -> value) containing the requested timeIndex. The value may be a transparent view (TDBRangeProxy).
	If the timeIndex is not found, answer the result of evaluating aBlock."

	| index interval |
	index := self scanForTime: timeIndex.
	index = 0 ifTrue: [^ aBlock value].
	^ (interval := intervals at: index) ->
		((rawValues at: index)
			tdbInMemory: memory
			atTimes: interval
			withSideEffects: (sideEffects at: index))