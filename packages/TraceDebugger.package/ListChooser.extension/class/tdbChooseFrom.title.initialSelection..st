*TraceDebugger-UI-instance creation
tdbChooseFrom: aList title: aString initialSelection: selectedLabel

	^ self
		tdbChooseItemFrom: aList
		title: aString
		addAllowed: false
		initialSelection: selectedLabel