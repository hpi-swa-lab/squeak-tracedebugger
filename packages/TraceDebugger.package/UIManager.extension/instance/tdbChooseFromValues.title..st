*TraceDebugger-UI-ui requests
tdbChooseFromValues: values title: aString

	self flag: #moveUpstream.
	
	^ self
		chooseFromLabeledValues: (values
			collect: [:value | value asString -> value]
			as: OrderedDictionary)
		title: aString