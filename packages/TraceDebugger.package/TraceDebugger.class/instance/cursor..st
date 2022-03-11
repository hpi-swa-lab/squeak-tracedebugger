accessing
cursor: aCursor

	cursor ifNotNil:
		[cursor removeDependent: self].
	
	cursor := aCursor.
	
	cursor ifNotNil:
		[cursor addDependent: self].
	
	self changed: #cursor.