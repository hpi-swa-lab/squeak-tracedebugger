private
streamAllContextsOn: aStream

	aStream nextPut: context.
	self children do: [:child |
		child streamAllContextsOn: aStream].