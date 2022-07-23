private
resultForContextSlice: aContextSlice ifLeaf: leafResultBlock ifParent: allLeafsBlock

	^ (self isDisplayedAsLeaf: aContextSlice)
		ifTrue:
			[leafResultBlock value:
				(self memorySlice rangeValueAtTime:
					aContextSlice maxTimeIndex)]
		ifFalse:
			[allLeafsBlock value:
				(aContextSlice allLeavesSatisfying:
					[:eachContextSlice | self isDisplayedAsLeaf: eachContextSlice])]