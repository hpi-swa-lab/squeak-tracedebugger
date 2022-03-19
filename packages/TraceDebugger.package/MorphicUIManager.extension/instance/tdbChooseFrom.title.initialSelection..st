*TraceDebugger-UI-ui requests
tdbChooseFrom: values title: aString initialSelection: selectedValue
	
	self askForProvidedAnswerTo: aString ifSupplied: [:answer | 
		^ answer].
	
	^ ListChooser
		tdbChooseFrom: values
		title: aString
		initialSelection: selectedValue