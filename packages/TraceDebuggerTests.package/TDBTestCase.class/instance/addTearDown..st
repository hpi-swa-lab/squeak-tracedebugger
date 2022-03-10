running
addTearDown: aBlock

	^ self wrapTest: [:block | block ensure: aBlock]