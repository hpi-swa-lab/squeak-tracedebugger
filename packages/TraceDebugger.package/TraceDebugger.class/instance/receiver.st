accessing
receiver

	| context |
	context := self doItContext.
	(context perform: #isNil) ifTrue: [^ nil].
	^ context receiver