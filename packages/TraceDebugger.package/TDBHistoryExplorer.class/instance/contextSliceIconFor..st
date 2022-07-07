accessing - toolbuilder
contextSliceIconFor: aContextSlice

	| result |
	thisContext wrap: [:block | self computeViewPropertyIcon: block].
	
	result := self resultForContextSlice: aContextSlice.
	result ifNil: [^ nil].
	^ [self iconForValue: result errorOrResult]
		valueWithin: 10 milliSeconds
		onTimeout: [nil]