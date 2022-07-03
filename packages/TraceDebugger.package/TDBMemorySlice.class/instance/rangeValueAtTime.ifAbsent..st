accessing
rangeValueAtTime: timeIndex ifAbsent: aBlock
	"Answer the value for the range that the requested timeIndex belongs to. The value may be a transparent view (TDBRangeProxy).
	If the timeIndex is not found, answer the result of evaluating aBlock."

	| association |
	association := self associationAtTime: timeIndex ifAbsent: [^ aBlock value].
	^ association value