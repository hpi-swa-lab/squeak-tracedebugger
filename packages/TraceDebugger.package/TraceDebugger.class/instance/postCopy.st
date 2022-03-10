copying
postCopy

	super postCopy.
	
	self setProcess: process. "register new view"
	messageText := messageText copy.
	self cursor: cursor copy.
	receiverInspector := receiverInspector copy.
	receiverInspector debugger: self.
	contextVariablesInspector := contextVariablesInspector copy.
	contextVariablesInspector debugger: self.
	borderContexts := borderContexts copy.
	selectedContext := selectedContext.
	findSignature := findSignature.
	findClass := findClass.
	childContexts := rootContexts := nil.