private - stepping
stepBackToSendOrReturn
	"Step backward to the previous sendOrReturn or to the start of the current context. Note: The term sendOrReturn is historically grown and translates to 'intesting event on the bytecode level', such as a message send or a variable assignment."

	| start |
	start := self context.
	
	^ self stepBackUntil: [:context |
		(context tdbIdentical: start) not
			or: [context willReallySend]
			or: [context willReturn]
			or: [context willReallyStore]]