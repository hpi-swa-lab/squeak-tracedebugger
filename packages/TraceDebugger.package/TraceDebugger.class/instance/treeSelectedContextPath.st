accessing - toolbuilder
treeSelectedContextPath

	^ self treeSelectedContext
		ifNil: [#()]
		ifNotNil: [:context | context tdbStack contents reversed]