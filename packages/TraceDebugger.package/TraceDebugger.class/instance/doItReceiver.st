accessing
doItReceiver

	| context |
	context := self doItContext.
	^ context notNil
		ifFalse: [super doItReceiver]
		ifTrue: [context receiver]