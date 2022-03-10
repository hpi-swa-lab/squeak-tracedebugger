updating
updateInspectors 

	self flag: #todo. "reduce truncationLimit (performance)"
	receiverInspector
		context: self selectedContext;
		inspect: self selectedReceiver.
	contextVariablesInspector object: self selectedContext.