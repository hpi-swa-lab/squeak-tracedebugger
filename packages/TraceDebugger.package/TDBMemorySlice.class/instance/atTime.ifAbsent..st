accessing
atTime: timeIndex ifAbsent: aBlock
	"Answer the value at the requested timeIndex. The value may be a transparent view (TDBProxy).
	If the timeIndex is not found, answer the result of evaluating aBlock."

	| index |
	index := self scanForTime: timeIndex.
	index = 0 ifTrue: [^ aBlock value].
	^ memory
		object: (rawValues at: index)
		atTime: timeIndex
		withSideEffects: (sideEffects ifNotNil: [sideEffects at: index])