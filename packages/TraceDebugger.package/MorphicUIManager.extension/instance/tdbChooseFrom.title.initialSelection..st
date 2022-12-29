*TraceDebugger-UI-ui requests
tdbChooseFrom: values title: aString initialSelection: selectedValue
	
	self askForProvidedAnswerTo: aString ifSupplied: [:answer |
		(answer = #cancel or: [answer isNil]) ifTrue: [^ 0].
		^ values indexOf: answer].
	
	^ ListChooser
		tdbChooseFrom: values
		title: aString
		initialSelection: selectedValue