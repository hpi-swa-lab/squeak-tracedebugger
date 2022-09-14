accessing - toolbuilder
contextSliceToolTipFor: aContextSlice

	| tips |
	thisContext wrap: [:block | self computeViewPropertyString: block].
	
	aContextSlice ifNil: [^ nil].
	
	tips := OrderedCollection new.
	
	(self resultForContextSlice: aContextSlice) ifNotNil: [:result |
		tips add: (self resultLabelFor: result) asText allBold].
	tips add:
		(aContextSlice pathStringDo: [:printer |
			printer delimiter: String cr]).
	
	^ tips reduce: [:a :b | a , String cr, String cr, b]