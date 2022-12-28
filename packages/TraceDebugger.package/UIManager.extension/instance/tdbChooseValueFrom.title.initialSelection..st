*TraceDebugger-UI-ui requests
tdbChooseValueFrom: values title: aString initialSelection: selectedValue

	| index |
	index := self tdbChooseFrom: values title: aString initialSelection: selectedValue.
	^ index = 0 ifFalse:
		[values at: index]