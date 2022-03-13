*TraceDebugger-Core-accessing
tdbLivingHomeSuchThat: aBlock

	| outerContext |
	closureOrNil ifNil: [^ self].
	(outerContext := closureOrNil outerContext) isDead
		ifTrue: [^ self].
	(aBlock value: outerContext)
		ifFalse: [^ self].
	^ outerContext tdbLivingHomeSuchThat: aBlock