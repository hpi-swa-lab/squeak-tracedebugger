*TraceDebugger-UI-converting
tdbAsTimesStringBasedOn: aNumberOrCollection

	aNumberOrCollection isCollection ifTrue:
		[^ self tdbAsTimesStringBasedOn: aNumberOrCollection size].
	^ '{1} {2}' format: {aNumberOrCollection. self asPluralBasedOn: aNumberOrCollection}