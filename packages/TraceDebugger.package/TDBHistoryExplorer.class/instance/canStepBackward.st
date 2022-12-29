testing
canStepBackward

	^ self hasContextSliceSelected
		and: [self selectedContextSlice previousLeaf notNil]