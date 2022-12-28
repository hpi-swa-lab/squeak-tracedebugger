accessing
cursor: aCursor

	cursor ifNotNil:
		[cursor removeDependent: self].
	
	cursor := aCursor.
	
	cursor ifNotNil:
		[cursor addDependent: self].
	
	receiverInspector ifNotNil:
		[receiverInspector cursor: aCursor].
	contextVariablesInspector ifNotNil:
		[contextVariablesInspector cursor: aCursor].
	self changed: #cursor.