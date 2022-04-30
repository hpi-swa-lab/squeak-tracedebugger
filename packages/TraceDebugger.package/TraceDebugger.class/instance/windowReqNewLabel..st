updating
windowReqNewLabel: newLabel

	| baseLabel |
	baseLabel := self labelStringForTitle: ''.
	(newLabel beginsWith: baseLabel)
		ifFalse: [^ false].
	originalLabel := newLabel allButFirst: baseLabel size.
	^ true