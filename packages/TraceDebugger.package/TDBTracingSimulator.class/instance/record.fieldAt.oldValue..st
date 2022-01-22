private
record: anObject fieldAt: anInteger oldValue: value

	^ memory
		object: anObject
		priorTo: timeIndex
		fieldAt: anInteger
		put: value