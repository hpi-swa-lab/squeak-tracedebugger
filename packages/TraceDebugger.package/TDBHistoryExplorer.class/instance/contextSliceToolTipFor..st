accessing - toolbuilder
contextSliceToolTipFor: aContextSlice

	thisContext wrap: [:block | self computeViewPropertyString: block].
	
	^ nil