accessing
doItContext

	| context |
	context := self selectedContext.
	^ context notNil
		ifFalse: [super doItContext]
		ifTrue: [context]