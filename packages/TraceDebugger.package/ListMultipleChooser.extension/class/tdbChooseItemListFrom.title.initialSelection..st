*TraceDebugger-UI-instance creation
tdbChooseItemListFrom: someObjects title: aString initialSelection: selectedObjects

	^ self new
		title: aString;
		labels: (someObjects collect: [:ea | ea asString]);
		values: someObjects;
		tdbSelectedValues: selectedObjects;
		choose