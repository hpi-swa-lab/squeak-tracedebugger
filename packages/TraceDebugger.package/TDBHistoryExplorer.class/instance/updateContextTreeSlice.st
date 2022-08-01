updating
updateContextTreeSlice

	| times |
	memorySlice ifNil: [^ self].
	
	times := memorySlice timesAndValues associations
		select: [:intervalAndValue |
			intervalAndValue value in: [:result | self filterResult: result]]
		thenCollect: [:intervalAndValue |
			intervalAndValue key first].
	contextTreeSlice := self cursor
		makeTreeSliceForTimes: times
		contractPaths: self shouldContractPaths.
	
	expanded removeAll.
	self expandAllContextTreeSlicesAround:
		[selectedContextSlice := nil.
		self changed: #contextTreeSlice].