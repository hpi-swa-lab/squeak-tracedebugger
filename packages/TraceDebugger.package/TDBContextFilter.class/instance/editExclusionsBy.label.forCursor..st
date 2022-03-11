*TraceDebugger-UI-menus
editExclusionsBy: property label: label forCursor: aCursor

	| currentExclusions result |
	currentExclusions := Cursor wait showWhile:
		[self excludedItemsBy: property].
	
	result := Project uiManager
		tdbChooseMultipleFrom: ((self allValuesOf: property inCursor: aCursor)
			sorted: [:value | (currentExclusions includes: value) asBit] descending , #asString ascending)
		title: ('Choose excluded {1}' format: {label})
		initialSelection: currentExclusions.
	result ifNil: [^ self].
	
	self setExclusionsBy: property to: result.