private - stepping
basicCalleeOf: aContext
	"Answer the context whose sender is aContext."

	^ self context findContextSuchThat: [:c | c sender == aContext]