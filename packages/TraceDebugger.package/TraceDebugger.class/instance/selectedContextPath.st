accessing
selectedContextPath

	^ self selectedContext
		ifNil: [#()]
		ifNotNil: [:context | context tdbStack contents reversed]