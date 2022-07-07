private
resultForContextSlice: aContextSlice

	(self isDisplayedAsLeaf: aContextSlice) ifFalse: [^ nil].
	
	^ self memorySlice rangeValueAtTime:
		aContextSlice maxTimeIndex