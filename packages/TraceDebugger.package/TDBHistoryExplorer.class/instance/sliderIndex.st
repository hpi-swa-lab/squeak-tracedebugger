accessing - state
sliderIndex

	^ contextTreeSlice allLeaves indexOf: (self selectedContextSlice ifNil: [^ 0]) firstLeaf