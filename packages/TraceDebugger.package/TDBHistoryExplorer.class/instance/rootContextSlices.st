accessing - toolbuilder
rootContextSlices

	^ contextTreeSlice
		ifNil: [{}]
		ifNotNil: [{contextTreeSlice}]