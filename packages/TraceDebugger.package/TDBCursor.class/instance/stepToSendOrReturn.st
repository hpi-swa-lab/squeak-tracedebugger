private - stepping
stepToSendOrReturn

	| start |
	start := self context.
	start isDead ifTrue: [^ self].
	
	self stepUntil: [:context |
		context ~= start
			or: [context willReallySend]
			or: [context willReturn]
			or: [context willReallyStore]].