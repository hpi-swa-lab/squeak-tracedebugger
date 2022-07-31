accessing
object: anObject atTime: timeIndex instVarAt: instVarIndex ifAbsent: absentBlock

	^ self object: anObject atTime: timeIndex atSlot: instVarIndex negated ifAbsent: absentBlock