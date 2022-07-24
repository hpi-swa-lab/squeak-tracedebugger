accessing - toolbuilder
contextSliceLabelFor: aContextSlice

	^ ((self contextSliceLabelsFor: aContextSlice)
		collect: [:label | label copyReplaceAll: String tab with: String space])
		joinSeparatedBy: Character tab