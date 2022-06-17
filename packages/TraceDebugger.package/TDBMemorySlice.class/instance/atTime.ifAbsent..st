accessing
atTime: timeIndex ifAbsent: aBlock
	"Answer the value at the requested timeIndex. The value may be a transparent view (TDBProxy).
	If the timeIndex is not found, answer the result of evaluating aBlock."

	| association |
	association := self rawAssociationAtTime: timeIndex ifAbsent: [^ aBlock value].
	^ memory object: association value atTime: timeIndex