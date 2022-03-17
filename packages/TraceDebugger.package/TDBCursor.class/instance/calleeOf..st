extensions
calleeOf: aContext
	"Answer the next visible context whose sender is aContext."

	^ self context findContextSuchThat: [:context |
		(self senderOf: context) tdbIdentical: aContext]