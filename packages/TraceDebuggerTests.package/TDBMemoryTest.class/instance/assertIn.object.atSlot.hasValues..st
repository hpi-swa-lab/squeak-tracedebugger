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