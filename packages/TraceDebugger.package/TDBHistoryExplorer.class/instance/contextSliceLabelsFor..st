accessing - toolbuilder
contextSliceLabelsFor: aContextSlice

	| labels |
	labels := OrderedCollection new.
	
	labels add: (self contextLabelFor: aContextSlice).
	
	self shouldShowValuesInTree ifTrue:
		[(self resultForContextSlice: aContextSlice) ifNotNil: [:result |
			labels add: (self resultLabelFor: result)]].
	
	^ labels