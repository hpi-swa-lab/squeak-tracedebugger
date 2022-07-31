accessing - state
isDisplayedAsLeaf: aContextSlice

	^ (self childContextSlicesFor: aContextSlice) isEmpty
		or: [(expanded includes: aContextSlice) not]