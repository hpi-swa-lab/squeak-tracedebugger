private
streamChildrenForFilter: filter aboveHome: startContext on: aStream

	self children do: [:child |
		(((child contextAtTime: child minTimeIndex) home in: [:childHome | startContext tdbIsOrHasSender: childHome])
			and: [filter value: child originalContext])
				ifTrue: [aStream nextPut: child]
				ifFalse:
					[child
						streamChildrenForFilter: filter
						aboveHome: startContext
						on: aStream]].