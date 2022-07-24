actions
debug: aContextSlice

	^ self cursor
		debug: aContextSlice bottomContext
		atTime:
			((self isDisplayedAsLeaf: aContextSlice)
				ifTrue: [aContextSlice maxTimeIndex]
				ifFalse: [aContextSlice minTimeIndex])