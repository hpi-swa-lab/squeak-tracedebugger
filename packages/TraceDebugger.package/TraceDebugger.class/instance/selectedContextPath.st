accessing - context
selectedContextPath

	^ self selectedContext
		ifNil: [#()]
		ifNotNil: [:context | (self stackForContext: context) reversed]