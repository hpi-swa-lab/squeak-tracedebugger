updating
windowReqNewLabel: newLabel

	| baseLabel |
	baseLabel := self labelStringForTitle: ''. "with colon"
	(newLabel beginsWith: baseLabel) ifTrue:
		[originalLabel := newLabel allButFirst: baseLabel size.
		^ true].
	
	baseLabel := self labelStringForTitle: nil. "without colon"
	(newLabel beginsWith: baseLabel) ifTrue:
		[originalLabel := nil.
		^ true].
	
	^ false