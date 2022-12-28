*TraceDebugger-UI-instance creation
tdbChooseFrom: aList title: aString initialSelection: selectedLabel

	^ self
		tdbChooseFrom: aList
		title: aString
		addAllowed: false
		initialSelection: selectedLabel