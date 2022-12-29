*TraceDebugger-UI-ui requests
tdbChooseFromLabeledValues: aDictionary title: aString initialSelection: selectedValue

	| choice |
	self flag: #moveUpstream.
	
	choice := self tdbChooseFrom: aDictionary keys values: aDictionary values title: aString initialSelection: selectedValue.
	^ choice