updating
updateContextTreeSlice

	| times |
	memorySlice ifNil: [^ self].
	
	times := memorySlice intervals collect: [:interval | interval first].
	contextTreeSlice := self cursor
		makeTreeSliceForTimes: times
		contractPaths: self shouldContractPaths.
	
	expanded removeAll.
	self expandAllContextTreeSlicesAround:
		[selectedContextSlice := nil.
		self changed: #contextTreeSlice].