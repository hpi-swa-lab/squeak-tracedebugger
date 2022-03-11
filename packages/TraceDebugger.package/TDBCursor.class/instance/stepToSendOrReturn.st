private - stepping
stepToSendOrReturn
	"Step forward to the next sendOrReturn or to the end of the current context. Note: The term sendOrReturn is historically grown and translates to 'intesting event on the bytecode level', such as a message send or a variable assignment."

	| start |
	start := self context.
	start isDead ifTrue: [^ nil].
	^ self stepUntil: [:context |
		(context tdbIdentical: start) not
			or: [context willReallySend]
			or: [context willReturn]
			or: [context willReallyStore]]