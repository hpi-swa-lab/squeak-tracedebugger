updating
update: aspect

	aspect = #flash ifTrue:
		[flashes addLast: thisContext sender home sender].
	
	^ super update: aspect