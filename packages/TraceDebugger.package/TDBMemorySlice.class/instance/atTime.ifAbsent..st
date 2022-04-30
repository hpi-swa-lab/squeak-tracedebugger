accessing
atTime: timeIndex ifAbsent: aBlock

	| association |
	association := self associationAtTime: timeIndex ifAbsent: [^ aBlock value].
	^ memory object: association value atTime: association key