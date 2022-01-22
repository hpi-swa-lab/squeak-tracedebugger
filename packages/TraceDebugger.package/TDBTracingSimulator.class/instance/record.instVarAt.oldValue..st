private
record: anObject instVarAt: anInteger oldValue: value

	^ memory
		object: anObject
		priorTo: timeIndex
		instVarAt: anInteger
		put: value