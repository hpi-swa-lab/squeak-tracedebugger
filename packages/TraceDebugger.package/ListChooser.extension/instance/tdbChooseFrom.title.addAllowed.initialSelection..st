*TraceDebugger-UI-initialize-release
tdbChooseFrom: labelList title: aString addAllowed: aBoolean initialSelection: selectedLabel

	self items: labelList asOrderedCollection.
	self title: aString.
	self addAllowed: aBoolean.
	self tdbSelectedItem: selectedLabel.
	
	ToolBuilder open: self.
	^ self items indexOf: self result