private
streamAllContextsOn: aStream satisfying: aBlock

	(aBlock value: context) ifTrue:
		[aStream nextPut: context].
	self children do: [:child |
		child streamAllContextsOn: aStream satisfying: aBlock].