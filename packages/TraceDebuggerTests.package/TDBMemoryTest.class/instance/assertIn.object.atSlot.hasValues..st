asserting
assertIn: aMemory object: anObject atSlot: slot hasValues: values

	| timeIndex |
	"Test #object:atTime:atSlot:ifAbsent:"
	timeIndex := 0.
	values do: [:value |
		self assert: value equals:
			(aMemory object: anObject atTime: timeIndex atSlot: slot ifAbsent: [self fail]).
		timeIndex := timeIndex + 1].
	self assert: self equals:
		(aMemory object: anObject atTime: timeIndex atSlot: slot ifAbsent: [self]).
	
	"Test #object:atTimes:atSlot:getCurrent:ifAbsent:"
	values
		ifEmpty:
			[self assert: #absent equals:
				(aMemory object: anObject atTimes: (0 to: values size - 1) atSlot: slot getCurrent: [self fail] ifAbsent: [#absent])]
		ifNotEmpty:
			[self assert: values equals:
				(aMemory object: anObject atTimes: (0 to: values size - 1) atSlot: slot getCurrent: [self fail] ifAbsent: [self fail]) rawPointValues].