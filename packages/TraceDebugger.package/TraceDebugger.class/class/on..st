instance creation
on: aCursor

	self flag: #refactor. "Inconsistent on: argument type"
	^ self new
		cursor: aCursor;
		yourself