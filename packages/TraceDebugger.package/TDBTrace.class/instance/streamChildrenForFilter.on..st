private
streamChildrenForFilter: filter on: aStream

	self children do: [:child |
		(filter value: child originalContext)
			ifTrue: [aStream nextPut: child]
			ifFalse: [child streamChildrenForFilter: filter on: aStream]].