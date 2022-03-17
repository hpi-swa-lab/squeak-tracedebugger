extensions
returnValueFor: aContext

	self returnValueFor: aContext ifPresent: [:value | ^ value].
	
	^ self error: 'Return value not found'