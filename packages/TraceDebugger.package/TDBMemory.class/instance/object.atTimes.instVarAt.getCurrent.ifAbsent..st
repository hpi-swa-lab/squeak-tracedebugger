accessing
object: anObject atTimes: timeIndices instVarAt: instVarIndex getCurrent: currentBlock ifAbsent: absentBlock

	^ self object: anObject atTimes: timeIndices atSlot: instVarIndex negated getCurrent: currentBlock ifAbsent: absentBlock