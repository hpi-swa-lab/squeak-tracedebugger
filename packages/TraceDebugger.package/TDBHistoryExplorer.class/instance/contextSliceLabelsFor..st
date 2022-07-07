accessing - toolbuilder
contextSliceLabelsFor: aContextSlice

	| labels |
	labels := OrderedCollection new.
	
	labels add: (self contextLabelFor: aContextSlice).
	
	self shouldShowValuesInTree ifTrue:
		[(self resultForContextSlice: aContextSlice) ifNotNil: [:result |
			| label |
			label := [result
				ifError: [:error | self errorLabelFor: error]
				ifResult: [:value | self valueLabelFor: value]]
					on: TDBRetracingFrayOut do: [:ex |
						'<fray out: {1}>' format: {ex slice values}].
			labels add: label]].
	
	^ labels