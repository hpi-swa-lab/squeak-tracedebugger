private
coalesceEqually
	
	self flag: #todo. "Should we operate on non-raw values here?"

	^ self coalesce: [:someValue :otherValue | someValue = otherValue]