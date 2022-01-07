asserting
assertObject: anObject atSlot: slot hasSeries: values

	| timeIndex |
	timeIndex := 0.
	values do: [:value |
		self assert: value equals:
			(memory object: anObject atTime: timeIndex atSlot: slot ifAbsent: [self fail]).
		timeIndex := timeIndex + 1].
	self assert: thisContext equals:
		(memory object: anObject atTime: timeIndex atSlot: slot ifAbsent: [thisContext home]).