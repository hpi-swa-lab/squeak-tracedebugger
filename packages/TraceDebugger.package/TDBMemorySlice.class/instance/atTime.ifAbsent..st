accessing
atTime: timeIndex ifAbsent: aBlock
	"Answer the value at the requested timeIndex. The value may be a transparent view (TDBRangeProxy).
	If the timeIndex is not found, answer the result of evaluating aBlock."

	| index |
	index := self scanForTime: timeIndex.
	index = 0 ifTrue: [^ aBlock value].
	"Note: Do not answer a regular TDBProxy here because the rawValue or the sideEffects still may contain any unresolved vectors."
	^ memory
		object: (rawValues at: index)
		atTimes: (timeIndex to: timeIndex)
		withSideEffects: (sideEffects ifNotNil: [sideEffects at: index])