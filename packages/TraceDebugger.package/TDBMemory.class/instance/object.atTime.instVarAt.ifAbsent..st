accessing
object: anObject atTime: timeIndex instVarAt: instVarIndex ifAbsent: aBlock

	^ self object: anObject atTime: timeIndex atSlot: instVarIndex negated ifAbsent: aBlock