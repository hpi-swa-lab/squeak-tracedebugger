copying
postCopy

	super postCopy.
	
	self setProcess: process. "register new view"
	messageText := messageText copy.
	cursor := cursor copy.
	receiverInspector := receiverInspector copy.
	contextVariablesInspector := contextVariablesInspector copy.
	bottomContexts := bottomContexts copy.
	selectedContext := selectedContext.
	findSignature := findSignature.
	findClass := findClass.
	childContexts := rootContexts := nil.