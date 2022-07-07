printing
displayPathIfShort: aBlock

	| displayPath |
	displayPath := self path.
	
	displayPath last isNumber ifTrue:
		[displayPath size = 1 ifTrue:
			[^ aBlock value: ('@ {1}' format: {displayPath last})].
		displayPath := displayPath allButLast].
	
	^ displayPath