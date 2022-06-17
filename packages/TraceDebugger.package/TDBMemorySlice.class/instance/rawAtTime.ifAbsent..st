accessing - raw values
rawAtTime: timeIndex ifAbsent: aBlock
	"Answer the raw value at the requested timeIndex.
	If the timeIndex is not found, answer the result of evaluating aBlock.
	
	Raw protocol. The raw value does not reflect all changes to the object at the requested point in time. Use the common protocol (#atTime:ifAbsent:) to retrieve a transparent view on the object state instead."

	| association |
	association := self rawAssociationAtTime: timeIndex ifAbsent: [^ aBlock value].
	^ association value