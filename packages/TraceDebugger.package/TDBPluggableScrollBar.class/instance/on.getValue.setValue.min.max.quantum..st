initialization
on: anObject getValue: getSel setValue: setSel min: minValueOrSel max: maxValueOrSel quantum: quantumValueOrSel

	self
		model: anObject;
		getValueSelector: getSel;
		setValueSelector: setSel.
	minimumValue := Float negativeInfinity.
	maximumValue := Float infinity.
	quantum := nil.
	value :=  model perform: getValueSelector.
	
	minValueOrSel isSymbol
		ifTrue: [self getMinimumValueSelector: minValueOrSel; getMinimumValue]
		ifFalse: [self minimumValue: minValueOrSel].
	maxValueOrSel isSymbol
		ifTrue: [self getMaximumValueSelector: maxValueOrSel; getMaximumValue]
		ifFalse: [self maximumValue: maxValueOrSel].
	quantumValueOrSel isSymbol
		ifTrue: [self getQuantumSelector: quantumValueOrSel; getQuantum]
		ifFalse: [self quantum: quantumValueOrSel].
	self setValue: self getValue.
	
	self computeSlider.