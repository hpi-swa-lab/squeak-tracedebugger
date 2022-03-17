enumerating contexts
findContextForClass: aClass startingAtTime: timeIndex

	^ self
		findContextSuchThat: [:context | context methodClass = aClass]
		startingAtTime: timeIndex