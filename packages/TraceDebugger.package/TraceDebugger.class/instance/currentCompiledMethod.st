accessing
currentCompiledMethod

	^ currentCompiledMethod
		ifNil: [currentCompiledMethod := self selectedContext
			ifNotNil: [:context | context method]]