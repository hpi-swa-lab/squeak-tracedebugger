*TraceDebugger-UI-ui requests
tdbChooseMultipleFrom: values title: aString initialSelection: selectedValues

	self flag: #moveUpstream.
	
	^ self chooseMultipleFrom: values title: aString