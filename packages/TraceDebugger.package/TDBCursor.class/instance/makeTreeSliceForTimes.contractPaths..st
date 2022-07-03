enumerating contexts
makeTreeSliceForTimes: timeIndices contractPaths: contractPaths
	"Create a slice of the context tree that contains all contexts for the given timeIndices. If contractPaths is set to true, contract the tree to avoid degenerated nested lists."

	^ self rootTrace
		makeTreeSliceForTimes: timeIndices
		contractPaths: contractPaths