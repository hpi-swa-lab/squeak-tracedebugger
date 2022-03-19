*TraceDebugger-UI-ui requests
tdbChooseFrom: values title: aString initialSelection: selectedValue

	self flag: #moveUpstream.
	
	^ self chooseFrom: values title: aString