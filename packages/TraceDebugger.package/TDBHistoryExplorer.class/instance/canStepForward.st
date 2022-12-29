testing
canStepForward

	^ self hasContextSliceSelected
		and: [self selectedContextSlice nextLeaf notNil]