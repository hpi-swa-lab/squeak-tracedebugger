updating
update: aspect

	aspect = #flash ifTrue:
		[flashes addLast: thisContext home sender home sender].
	
	^ super update: aspect