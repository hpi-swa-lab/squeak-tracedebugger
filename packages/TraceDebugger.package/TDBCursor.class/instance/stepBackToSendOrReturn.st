private
stepBackToSendOrReturn

	| start |
	start := self context.
	start isDead ifTrue: [^ self].
	
	self stepBackUntil: [:context |
		context ~= start
			or: [context willReallySend]
			or: [context willReturn]
			or: [context willReallyStore]].