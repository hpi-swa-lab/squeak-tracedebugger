asserting
assert: aContextSlice detailsText: expectedPattern

	| detailsString |
	explorer selectContextSlice: aContextSlice.
	
	detailsString := explorer detailsText asString.
	^ self
		assert: (expectedPattern match: detailsString)
		description: (self comparingStringBetween: expectedPattern and: detailsString)