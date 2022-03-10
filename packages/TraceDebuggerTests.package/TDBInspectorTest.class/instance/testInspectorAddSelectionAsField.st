tests
testInspectorAddSelectionAsField

	| object inspector valuePane window |
	object := TDBTestObject new
		plonk: 6;
		griffle: 7;
		yourself.
	inspector := self classUnderTest on: object.
	window := ToolBuilder open: inspector.
	window in: [:w | self addTearDown: [w delete]].
	
	valuePane := window findDeepSubmorphThat: [:m | m knownName = #valuePane] ifAbsent: [self fail].
	valuePane setText: '(plonk * griffle) squared'.
	valuePane selectFrom: 2 to: 16.
	inspector addSelectionAsField.
	
	self assert: #custom equals: inspector selectedField type.
	self assert: '42' equals: valuePane text asString.