asserting
assertObject: anObject atSlot: slot hasValues: values

	^ self 
		assertIn: memory
		object: anObject
		atSlot: slot
		hasValues: values