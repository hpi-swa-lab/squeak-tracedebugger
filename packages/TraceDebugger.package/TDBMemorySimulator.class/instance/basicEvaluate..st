evaluating
basicEvaluate: aBlock
	"Evaluate aBlock in a the receiver, maybe isolating it from the rest of the image according to #shouldIsolate, and answer the result as it is seen from the global perspective.
	PRIVATE! Does not care about any exceptions that are signaled during the simulation, causing them to be handled still inside the isolation, even if an exception handler has been defined outside of the isolated stack. Depending on the context, this can mean that even the eventual pop-up of the debugger will be isolated and thus invisible to you! Usually, it is a better idea to use the public #evaluate: protocol instead."

	^ super evaluate: aBlock