accessing
withAllParents

	^ (self parent ifNil: [{}] ifNotNil: #withAllParents)
		copyWith: self