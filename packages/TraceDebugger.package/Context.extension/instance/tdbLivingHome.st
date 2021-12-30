*TraceDebugger-Core-accessing
tdbLivingHome

	| outerContext |
	closureOrNil ifNil: [^ self].
	(outerContext := closureOrNil outerContext) isDead
		ifTrue: [^ self].
	^ outerContext tdbLivingHome