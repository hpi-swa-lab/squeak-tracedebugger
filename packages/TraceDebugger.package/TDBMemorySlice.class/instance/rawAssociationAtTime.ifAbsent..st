accessing - raw values
rawAssociationAtTime: timeIndex ifAbsent: aBlock
	"Answer an association (interval -> rawValue) containing the requested timeIndex.
	If the timeIndex is not found, answer the result of evaluating aBlock.
	
	Raw protocol. The raw value does not reflect all changes to the object at the requested point in time. Use the common protocol (#associationAtTime:ifAbsent:) to retrieve a transparent view on the object state instead."

	| index |
	index := self scanForTime: timeIndex.
	index = 0 ifTrue: [^ aBlock value].
	^ (intervals at: index) -> (rawValues at: index)