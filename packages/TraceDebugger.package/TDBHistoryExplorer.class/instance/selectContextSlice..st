accessing - toolbuilder
selectContextSlice: aContextSlice

	selectedContextSlice := aContextSlice.
	self changed: #selectedContextSlice.
	
	"make sure it is not collapsed (e.g., when selecting from navigation bar)"
	(aContextSlice notNil
		and: [aContextSlice parent notNil]
		and: [(expanded includes: aContextSlice parent) not])
			ifTrue:
				[expanded addAll: aContextSlice withAllParents.
				self changed:
					#(openPath) ,
						(aContextSlice withAllParents
							collect: [:eachParent | self contextLabelFor: eachParent])].