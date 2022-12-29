*TraceDebugger-UI-ui requests
tdbChooseFrom: labels values: values title: aString initialSelection: selectedValue
	
	| initialIndex index |
	self askForProvidedAnswerTo: aString ifSupplied: [:answer |
		(answer isArray and: [answer size = 2] and: [answer first = #provideIndex])
			ifTrue: [^ values at: answer second].
		^ answer].
	
	initialIndex := values indexOf: selectedValue.
	index := ListChooser
		tdbChooseFrom: labels
		title: aString
		initialSelection: (initialIndex = 0 ifFalse: [labels at: initialIndex]).
	^ index = 0 ifFalse:
		[values at: index]