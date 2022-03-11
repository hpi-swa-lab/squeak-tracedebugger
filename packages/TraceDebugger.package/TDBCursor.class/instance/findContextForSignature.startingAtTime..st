enumerating
findContextForSignature: signature startingAtTime: timeIndex

	^ self
		findContextSuchThat: [:context | context tdbSignature = signature]
		startingAtTime: timeIndex