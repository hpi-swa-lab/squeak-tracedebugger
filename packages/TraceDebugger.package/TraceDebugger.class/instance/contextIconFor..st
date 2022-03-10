accessing - toolbuilder
contextIconFor: aContext

	thisContext wrap: [:block | self computeViewPropertyIcon: block].
	
	self shouldShowReturnValue ifFalse: [^ nil].
	
	self flag: #iconColumnIndex. "The column position of the icon is 2, as hardcoded in IndentingListItemMorph class>>#iconColumnIndex."
	^ self cursor
		returnValueFor: aContext
		ifPresent: [:value | self iconForValue: value]