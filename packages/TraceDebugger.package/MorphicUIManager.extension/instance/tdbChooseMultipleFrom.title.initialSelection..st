*TraceDebugger-UI-ui requests
tdbChooseMultipleFrom: values title: aString initialSelection: selectedValues
	
	self askForProvidedAnswerTo: aString ifSupplied: [:answer | 
		^ answer].
	
	^ ListMultipleChooser
		tdbChooseFrom: values
		title: aString
		initialSelection: selectedValues