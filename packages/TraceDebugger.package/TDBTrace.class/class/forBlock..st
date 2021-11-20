instance creation
forBlock: aBlock
 
	^ self forContext: (aBlock asContext
		stepToSendOrReturn
			flag: #workaround "because initial DebuggerMethodMap selection is empty otherwise")